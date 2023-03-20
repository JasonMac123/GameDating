import React, { useEffect, useState } from "react";
import axios from "axios";

function Register(props) {

const [user, setUser]=useState({
  name: "",
  email: "",
  phone_number: "",
  password: "",
  profile_picture: "",
  cover_picture: "",
  gender_identity: "",
  gender_preference: "",
  summary: ""
})

const handleChange = (event) => {

  setUser({...user, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => { 
  event.preventDefault()
  return axios.post("/api/register", user)
  .then((result) => {
    props.setUserID(result.data.id)
    props.setDisplay(3);
  }) 
}

return (
<div classname="register">
<h1>Register</h1>

  <form autoComplete="off" onSubmit={handleSubmit} >
  <input type="text" value={user.name} name ="name" onChange={handleChange} placeholder="Name"/>
  <input type="email" value={user.email} name ="email" onChange={handleChange} placeholder="Email"/>
  <input type="password" value={user.password} name ="password" onChange={handleChange} placeholder="Password"/>
  <input type="text" value={user.phone_number} name ="phone_number" onChange={handleChange} placeholder="Phone-Number"/>
  <input type="text" value={user.profile_picture} name ="profile_picture" onChange={handleChange} placeholder="Profile Picture"/>
  <input type="text" value={user.cover_picture} name ="cover_picture" onChange={handleChange} placeholder="Cover Picture"/>
  <fieldset>
    <legend>Please select your gender identity:</legend>
    <div>
      <input type="radio" id="female" name="gender_identity" value="female" onClick={handleChange}/>
      <label for="female">Female</label><br/>
      <input type="radio" id="male" name="gender_identity" value="male" onClick={handleChange}/>
      <label for="male">Male</label><br/>
      <input type="radio" id="both" name="gender_identity" value="both" onClick={handleChange}/>
      <label for="both">Both</label>
    </div>
  </fieldset>
  <fieldset>
    <legend>Please select your gender preference:</legend>
    <div>
      <input type="radio" id="female" name="gender_preference" value="female" onClick={handleChange}/>
      <label for="female">Female</label><br/>
      <input type="radio" id="male" name="gender_preference" value="male" onClick={handleChange}/>
      <label for="male">Male</label><br/>
      <input type="radio" id="both" name="gender_preference" value="both" onClick={handleChange}/>
      <label for="both">Both</label>
    </div>
  </fieldset>
  <input type="text" value={user.summary} name ="summary" onChange={handleChange} placeholder="Summary"/>
  <div>
      <button type="submit">Submit</button>
  </div>
</form>
</div>
);
}

export default Register;

// (name, email, password, phone_number, profile_picture, cover_picture, gender_identity, gender_preference, summary)
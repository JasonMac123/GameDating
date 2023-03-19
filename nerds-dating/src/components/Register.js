import React, { useEffect, useState } from "react";
import axios from "axios";

function Register() {

const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [phoneNumber, setPhoneNumber]=useState('');
const [password, setPassword]=useState('');
const [profilePicture, setProfilePicture]=useState('');
const [coverPicture, setCoverPicture]=useState('');
const [genderIdentity, setGenderIdentity]=useState('');
const [genderPreference, setGenderPreference]=useState('');
const [summary, setSummary]=useState('');

const handleSubmit = (event) => { 
  event.preventDefault()
  console.log(genderIdentity);
  return axios.post("/api/register", {
    name: name,
    email: email,
    password: password,
    phone_number: phoneNumber,
    profile_picture: profilePicture,
    cover_picture: coverPicture,
    gender_identity: genderIdentity,
    gender_preference: genderPreference,
    summary: summary,
  })    
}

return (
<div classname="register">
<h1>Register</h1>

{/* <form autoComplete="off" onSubmit={(event) => event.preventDefault}> */}
  <form autoComplete="off" onSubmit={handleSubmit} >
  <input type="text" value={name} name ="name" onChange={(e)=>{setName(e.target.value)}} placeholder="Name"/>
  <input type="email" value={email} name ="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
  <input type="password" value={password} name ="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
  <input type="text" value={phoneNumber} name ="phone_number" onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder="Phone-Number"/>
  <input type="text" value={profilePicture} name ="profile_picture" onChange={(e)=>{setProfilePicture(e.target.value)}} placeholder="Profile Picture"/>
  <input type="text" value={coverPicture} name ="cover_picture" onChange={(e)=>{setCoverPicture(e.target.value)}} placeholder="Cover Picture"/>
  <fieldset>
    <legend>Please select your gender identity:</legend>
    <div>
      <input type="radio" id="female" name="gender_identity" value="female" onClick={(e)=>{setGenderIdentity(e.target.value)}}/>
      <label for="female">Female</label><br/>
      <input type="radio" id="male" name="gender_identity" value="male" onClick={(e)=>{setGenderIdentity(e.target.value)}}/>
      <label for="male">Male</label><br/>
      <input type="radio" id="both" name="gender_identity" value="both" onClick={(e)=>{setGenderIdentity(e.target.value)}}/>
      <label for="both">Both</label>
    </div>
  </fieldset>
  <fieldset>
    <legend>Please select your gender preference:</legend>
    <div>
      <input type="radio" id="female" name="gender_preference" value="female" onClick={(e)=>{setGenderPreference(e.target.value)}}/>
      <label for="female">Female</label><br/>
      <input type="radio" id="male" name="gender_preference" value="male" onClick={(e)=>{setGenderPreference(e.target.value)}}/>
      <label for="male">Male</label><br/>
      <input type="radio" id="both" name="gender_preference" value="both" onClick={(e)=>{setGenderPreference(e.target.value)}}/>
      <label for="both">Both</label>
    </div>
  </fieldset>
  <input type="text" value={summary} name ="summary" onChange={(e)=>{setSummary(e.target.value)}} placeholder="Summary"/>
  <div>
      <button type="submit">Submit</button>
  </div>
</form>
</div>
);
}

export default Register;

// (name, email, password, phone_number, profile_picture, cover_picture, gender_identity, gender_preference, summary)
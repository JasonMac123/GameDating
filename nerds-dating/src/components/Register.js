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
const [summary, setSummary]=useState('');




return (
<div classname="signup">
<h1>Register</h1>

<form action="/" method="POST">
  <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Name"/>
  <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
  <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
  <input type="text" onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder="Phone-Number"/>
  <input type="text" onChange={(e)=>{setProfilePicture(e.target.value)}} placeholder="Profile Picture"/>
  <input type="text" onChange={(e)=>{setCoverPicture(e.target.value)}} placeholder="Cover Picture"/>
  <fieldset>
    <legend>Please select your gender preference:</legend>
    <div>
      <input type="radio" id="female" name="gender_preference" value="female" onClick={(e)=>{setGenderIdentity(e.target.value)}}/>
      <label for="female">Female</label><br/>
      <input type="radio" id="male" name="gender_preference" value="male" onClick={(e)=>{setGenderIdentity(e.target.value)}}/>
      <label for="male">Male</label><br/>
      <input type="radio" id="both" name="gender_preference" value="both" onClick={(e)=>{setGenderIdentity(e.target.value)}}/>
      <label for="both">Both</label>
    </div>
  </fieldset>
  <input type="text" onChange={(e)=>{setSummary(e.target.value)}} placeholder="Summary"/>
  <div>
      <button type="submit">Submit</button>
  </div>
</form>
</div>
);
}

export default Register;

// (name, email, password, phone_number, profile_picture, cover_picture, gender_identity, gender_preference, summary)
import React, { useEffect, useState } from "react";
import axios from "axios";

function Signup() {

const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [phoneNumber, setPhoneNumber]=useState('');
const [password, setPassword]=useState('');

async function submit(e){
e.preventDefault();

try{
await axios.post("http://localhost:3000/", {
name, email, phoneNumber, password
})
}
catch(e){
console.log(e)
}
}

return (
<div classname="signup">
<h1>Signup</h1>

<form action="/login" method="POST">
<input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Name"/>
<input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
<input type="text" onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder="Phone-Number"/>
<input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Name"/>
<input type="submit" onClick={submit}/>
</form>
</div>
);
}

export default Signup;
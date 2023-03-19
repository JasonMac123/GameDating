import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');

const handleSubmit = (event) => { 
  event.preventDefault()
  console.log(email)
  // axios.post("/", {
    // email: email,
    // password: password,
  // })    
}

return (
<div>
<h1>Login</h1>

<form autoComplete="off" onSubmit={handleSubmit} >
<input type="email" value={email} name ="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
<input type="password" value={password} name ="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
<input type="submit" onClick={handleSubmit}/>
</form>

</div>
)

}

export default Login;

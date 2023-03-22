import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return axios.post("/api/login", user).then((result) => {
      if (!result.data) {
        console.log("no data")
      }
      else {
        console.log(result)
        props.setUserID(result.data.id);
        props.setDisplay(3);
      }

    });
  };

  return (
    <div>
      <h1>Login</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Login;

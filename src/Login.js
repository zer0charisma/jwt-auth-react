import React from "react";
import axios from "axios";
import { authToken } from "./authToken"

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const [username, password] = event.target.children;
    axios.post("https://62b537b4530b26da4ccadf76.mockapi.io/api/v1/jwt", {})
    .then(response => {
      const token = response.data.token;
      localStorage.setItem("token", token);
      authToken(token);
      window.location.href = '/profile'
    })
    .catch(err => console.log(err));
  };

  return (
    <form onSubmit={(event) => {handleSubmit(event);}}>
      <span><label>Username</label>
      <input type="input" id="username"/></span><br /><br />
      <span><label>Password</label>
      <input type="password" id="password" /></span><br /><br />
      <input type="submit" value="submit" />
    </form>
  );
}
export default Login;

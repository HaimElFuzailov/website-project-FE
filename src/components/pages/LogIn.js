import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <>
      <h1 className="log-in">Log In</h1>

      <br></br>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Username"
          id="username"
          name="username"
        />
        <br></br>
        <label htmlFor="password">Password: </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
        />
        <br></br>

        <button type="submit">Log In</button>
        <br></br>

        <p className="link-btn">
          Haven't Account yet? Sign up Here.
          <br />
          <span>
            {/*put router link here*/}
            <Link className="text" to={"/sign_up"}>
              Sign up
            </Link>
          </span>
        </p>
      </form>
    </>
  );
}

import React, { useRef, useState, useEffect } from "react";
import "../../App.css";
import { createNewUser } from "../../services/api";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // when component load we set the focus on the userInput top be on
  // useEffect(() => {
  //     userRef.current.focus();
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserBody = {
        userName: username,
        password: password,
        firstName: firstname,
        lastName: lastname,
        email: email,
        phone: phone,
        address: address,
      };

      const response = await createNewUser(newUserBody);
      setSuccess(true);
console.log(newUserBody)

      //clear state and controlled inputs
      setUsername("");
      setPassword("");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setAddress("");
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response.status === 400) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };
 

  return (
    <>
    
      <h1 className="sign_up">Sign Up</h1>

      <div className="signup-container">
        <br></br>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="username"
            id="username"
            name="username"
            placeholder="Username"
          />
          <br></br>
          <label htmlFor="password">Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <br></br>
          <label htmlFor="firstname">First Name: </label>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="firstname"
            id="firstname"
            name="firstname"
            placeholder="First Name"
          />
          <br></br>
          <label htmlFor="lastname">Last Name: </label>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="lastname"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
          />
          <br></br>
          <label htmlFor="email">Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <br></br>

          <label htmlFor="phone">Phone: </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            id="phone"
            name="phone"
            placeholder="Phone"
          />
          <br></br>
          <label htmlFor="address">Address: </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="address"
            id="address"
            name="address"
            placeholder="Address"
          />
          <br></br>
          <button>Sign In</button>
          <br></br>
          <p className="link-btn">
            Already registered?
            <br />
            <span>
              
              <Link className="text" to={"/log_in"}>
                Log In
              </Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
export default SignUp;

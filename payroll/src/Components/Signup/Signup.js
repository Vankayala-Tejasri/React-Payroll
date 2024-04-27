import React, { useState } from "react";
import "./Signup.css"; 
import Navbar from "../Navbar/Navbar";
import {Route, useNavigate} from 'react-router-dom'


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setRegistering] = useState(true);
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log(`Email: ${email}, Password: ${password}, Mode: ${isRegistering ? 'Register' : 'Login'}`);

  };
  const loginhandle =() =>{
        navigate('/Navbar');
  }

  return (
    <div className="auth-container">
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <form className="auth-form" onSubmit={handleFormSubmit}>
        <label className="auth-label">
          Email:
          <input
            className="auth-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="auth-label">
          Password:
          <input
            className="auth-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="auth-button" onClick={loginhandle} type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      <p className="auth-toggle" onClick={() => setRegistering(!isRegistering)}>
        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
      </p>
    </div>
  );
};

export default Register;
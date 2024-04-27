import "./Login.css"
import {Route, useNavigate} from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login(){
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const loginhandle =() =>{
    if ((name === 'tejasri' && password === '1234') || (name === 'janaki' && password === '1024')) {
        navigate('/AdminNavbar');
    } else {
        setErrorMessage("Invalid username or password");
    }
    
  }
    return(
      
        <>
    
        <div class="log">
          
          <h2 class="loginhead" >Admin Login</h2>
          <h4 id="text">{errorMessage}</h4>
        <label htmlFor='wef_date'>UserName:</label>
        <input type='text'  value={name} onChange={(e) => setName(e.target.value)}></input>
        <br>
        </br>
        <label htmlFor='wef_date'>Password:</label>
        <input type='password'  value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br>
        </br>
        <button id="button" onClick={loginhandle} >Submit</button>
        
         <Link class="hyper" to="/">Move to the Land page?</Link>
        </div>
      
      
        </>
        
    )

}
export default Login;
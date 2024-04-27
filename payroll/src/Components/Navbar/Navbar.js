// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { Link, Route, Routes } from 'react-router-dom';
import Da from '../Da/Da';
import Hra from '../Hra/Hra';
import Employee from '../Employee/Employee';
import Crud from '../Crud/Crud';
import Home from '../Home/Home';
import Register from '../Register/Register'
import Start from '../Start/Start'

function Navbar() {
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
  const [showDaDropdown, setShowDaDropdown] = useState(false);
  const [showHraDropdown, setShowHraDropdown] = useState(false);

  const toggleEmployeeDropdown = () => {
    setShowEmployeeDropdown(!showEmployeeDropdown);
  };

  const toggleDaDropdown = () => {
    setShowDaDropdown(!showDaDropdown);
  };

  const toggleHraDropdown = () => {
    setShowHraDropdown(!showHraDropdown);
  };

  return (
    <>
      <div className="navbar">
        <nav>
          <p>MITTAPALI SPINNERS PVT.LTD</p>
          <ul>
            <li>
              <Link className="name" to="/Register">
                Home
              </Link>
            </li>
            <li>
              <Link className="name" to="/Home">
                Salary
              </Link>
            </li>
            <li>
              <div className="dropdown" onMouseEnter={toggleEmployeeDropdown} onMouseLeave={toggleEmployeeDropdown}>
              <Link className="name" to="/Employee">
                Employee
              </Link>
                {showEmployeeDropdown && (
                  <div className="dropdown-content">
                    <Link to="/Crud">PF</Link>
                    <Link  to="/Da">DA</Link>
                    <Link to="/Hra">HRA</Link>
                    {/* Add more links related to Employee */}
                  </div>
                )}
              </div>
            </li>
            
            <li>
              <Link className="name" to="/">
                Logout
              </Link>
            </li> 
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Hra" element={<Hra />} />
        <Route path="/Da" element={<Da />} />
        <Route path="/Employee" element={<Employee />} />
        
        
      </Routes>
    </>
  );
}

export default Navbar;

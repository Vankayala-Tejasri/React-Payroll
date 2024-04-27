import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Admin from "../Admin/Admin";
import { useNavigate } from "react-router-dom";
import Salary from "../Salary/Salary";
import "./Adminnav.css";
function AdminNavbar() {
   const hist=useNavigate()
    const logout=()=>{
        hist('/Login');

    }
    return (
        <>
             <div className="navbaring">
        <nav>
          
          <ul className="navbar-naving">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Admin">Get All Employee Details</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Salary">Get All Employee Salaries</a>
                        </li>
                        <li className="nav-item">
                            <button onClick={logout}>Logout</button>
                        </li>
                    </ul> 
          
        </nav>
      </div>
            <Routes>
                <Route exact path="/Admin" element={<Admin />} />
                <Route exact path="/Salary" element={<Salary />} />

            </Routes>
        </>
    );
}

export default AdminNavbar;

<ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Admin">Get All Employee Details</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Salary">Get All Employee Salaries</a>
                        </li>
                        <li className="nav-item">
                            <button className="admin_button"><a className="nav-link" href="">Logout</a></button>
                        </li>
                    </ul> 
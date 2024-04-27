import './Start.css';
import {Route, useNavigate} from 'react-router-dom'
import Signup from '../Signup/Signup'
import { BrowserRouter, Routes } from 'react-router-dom';


function Start() {
    const navigate=useNavigate();
    const click=()=>{
        navigate('/Signup')
    }
    const clicks=()=>{
        navigate('/Login')
    }

    return (
        <>
        <div class="star">
            <div class="block1">
        <h1>Payroll Management System</h1>
        <p class="paragraph">A payroll management system is a software tool designed to 
            automate and streamline the process of paying employees. 
            It helps businesses calculate employee salaries, taxes, deductions, and benefits, manage employee time and attendance, generate payslips,
             and file tax forms, among other things.</p>
             <p>Employee Login to Handle the Salary Details</p>
        <button type="submit" onClick={click}>Employee Login</button>
        <p>Admin login for admins to handle the employee data</p>
        <button type="submit" onClick={clicks}>Admin Login</button>
        </div>
        <div class="block2">
            <img src="https://kredily.com/wp-content/uploads/2022/09/attendance-and-payroll-software-1024x536.png" width="550" height="400"></img>
        </div>
        </div>
      
        </>
    );
}

export default Start;
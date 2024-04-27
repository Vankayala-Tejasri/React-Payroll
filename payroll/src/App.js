import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Start from './Components/Start/Start';
import Signup from './Components/Signup/Signup';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Login from'./Components/Login/Login';
import Admin from './Components/Admin/Admin';
import Register from './Components/Register/Register';
import Crud from './Components/Crud/Crud';
import Da from './Components/Da/Da'
import Home from './Components/Home/Home'
import Hra from './Components/Hra/Hra'
import Employee from './Components/Employee/Employee';
import AdminNavbar from './Components/Admin-navbar/Admin-navbar';
import Salary from './Components/Salary/Salary'


function App() {
  return (
    <>
 
    
    <Routes>
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Admin" element={<Admin />} />
    <Route path="/" element={<Start />} />
    <Route path='/Navbar' element={<Navbar/>}/>
    <Route path='/Hra' element={<Hra/>}/>
    <Route path='/Da' element={<Da/>}/>
    <Route path='/Crud' element={<Crud/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Employee' element={<Employee/>}/>
    <Route path='/AdminNavbar' element={<AdminNavbar/>}/>
    <Route path='/Salary' element={<Salary/>}/>
    </Routes>
    
  
    </>
  );
}

export default App;

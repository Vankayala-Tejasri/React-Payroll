import React, { useState, useEffect } from "react";
import axios from "axios";
import './Admin.css';
import AdminNavbar from "../Admin-navbar/Admin-navbar";

function Admin() {
    const [EmployeeDetails, setEmployeeDetails] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [updatedEmployeeData, setUpdatedEmployeeData] = useState({
        emp_code: "",
        emp_name: "",
        emp_qual: "",
        emp_join_date: "",
        emp_resignation_date: "",
        emp_pan_no: "",
        emp_aadhar_no: "",
        emp_pf_flag: "",
        emp_pf_no: "",
        emp_esi_no: "",
        emp_est_flag: "",
        emp_gst_no: "",
        emp_basic: "",
        emp_dept: "",
        emp_hno: "",
        emp_street: "",
        emp_city: "",
        emp_pincode: "",
        emp_state: "",
        emp_ph_no: "",
        emp_email_id: "",
        emp_cons_res_flag: "",
        emp_spl_pay: "",
        emp_bank_ifsc: "",
        emp_bank_name: "",
        emp_bank_account_no: ""
    });

    // useEffect(() => {
    //     getEmployeeDetails();
    // }, []);
    useEffect(() => {
        getEmployeeDetails();
    }, []);
    const getEmployeeDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/all_employee_details_Read`);
            setEmployeeDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const openPopup = async (employee) => {
        setSelectedEmployee(employee);
        try {
            const response = await axios.get(`http://localhost:3001/employee_detail_Read/${employee}`);
            console.log(response.data[0])
            setUpdatedEmployeeData(response.data[0]); // Assuming response.data is an array with a single object
            setIsPopupOpen(true);
        } catch (error) {
            console.log(error);
        }
    };

    
    

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3001/employee_update/${selectedEmployee}`, updatedEmployeeData);
            console.log(updatedEmployeeData);
            getEmployeeDetails();

            setIsPopupOpen(false);
        } catch (error) {
            console.log(error);
        }
    };

    // Inside handleInputChange function
    const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        // Update the input field value without disabling the field
        setUpdatedEmployeeData(prevData => ({
            
            [name]: value
,
...prevData,        }));
    };
      
    const handleNameChange = (e) => {
        const value = e.target.value;
        setUpdatedEmployeeData(prevData => ({
            ...prevData,
            emp_name: value
        }));
    };
    
    return (
        <>
        <AdminNavbar/>
            {/* <div>
                <p>Get the all employee details</p>
                <button onClick={getEmployeeDetails}>All Employee details</button>
            </div> */}
            <h2>All Employees</h2>

            <table id="myTable">
                <thead>
                    <tr className="header">
                        <th>Employee code</th>
                        <th>Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {EmployeeDetails.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee[0]}</td>
                            <td>{employee[1]}</td>
                            <td><button onClick={() => openPopup(employee[0])}>Update</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isPopupOpen && selectedEmployee && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <h2>Update Employee Details</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdate();
                        }}>
                            <div className="form-row">
                                <div className="form-column">
                                    <label>Employee Code:</label>
                                    <input type="text" name="emp_code" value={updatedEmployeeData[0]}  />
                                    <label>Name:</label>
                                    <input 
    type="text" 
    name="emp_name" 
    value={updatedEmployeeData[1]} 
    onChange={(e) => setUpdatedEmployeeData({ ...updatedEmployeeData, emp_name: e.target.value })} 
/>
                                    <label>Qualification:</label>
                                    <input type="text" name="emp_qual" value={updatedEmployeeData[2]} onChange={handleInputChange} />
                                    <label>Join Date:</label>
                                    <input type="text" name="emp_join_date" value={updatedEmployeeData[3]} onChange={handleInputChange} />
                                    <label>Resignation Date:</label>
                                    <input type="text" name="emp_resignation_date" value={updatedEmployeeData[4]} onChange={handleInputChange} />
                                    <label>PAN No:</label>
                                    <input type="text" name="emp_pan_no" value={updatedEmployeeData[5]} onChange={handleInputChange} />
                                    <label>Aadhar No:</label>
                                    <input type="text" name="emp_aadhar_no" value={updatedEmployeeData[6]} onChange={handleInputChange} />
                                    <label>PF Flag:</label>
                                    <input type="text" name="emp_pf_flag" value={updatedEmployeeData[7]} onChange={handleInputChange} />
                                    <label>PF No:</label>
                                    <input type="text" name="emp_pf_no" value={updatedEmployeeData[8]} onChange={handleInputChange} />
                                </div>
                                <div className="form-column">
                                    <label>ESI No:</label>
                                    <input type="text" name="emp_esi_no" value={updatedEmployeeData[9]} onChange={handleInputChange} />
                                    <label>EST Flag:</label>
                                    <input type="text" name="emp_est_flag" value={updatedEmployeeData[10]} onChange={handleInputChange} />
                                    <label>GST No:</label>
                                    <input type="text" name="emp_gst_no" value={updatedEmployeeData[11]} onChange={handleInputChange} />
                                    <label>Basic:</label>
                                    <input type="text" name="emp_basic" value={updatedEmployeeData[12]} onChange={handleInputChange} />
                                    <label>Department:</label>
                                    <input type="text" name="emp_dept" value={updatedEmployeeData[13]} onChange={handleInputChange} />
                                    <label>House No:</label>
                                    <input type="text" name="emp_hno" value={updatedEmployeeData[14]} onChange={handleInputChange} />
                                    <label>Street:</label>
                                    <input type="text" name="emp_street" value={updatedEmployeeData[15]} onChange={handleInputChange} />
                                    <label>City:</label>
                                    <input type="text" name="emp_city" value={updatedEmployeeData[16]} onChange={handleInputChange} />
                                    <label>Pincode:</label>
                                    <input type="text" name="emp_pincode" value={updatedEmployeeData[17]} onChange={handleInputChange} />
                                    
                                </div>
                                <div className="form-column">
                                <label>State:</label>
                                    <input type="text" name="emp_state" value={updatedEmployeeData[18]}  />
                                    <label>Phone Number:</label>
                                    <input type="text" name="emp_ph_no" value={updatedEmployeeData[19]} onChange={handleInputChange} />
                                    <label>Email ID:</label>
                                    <input type="text" name="emp_email_id" value={updatedEmployeeData[20]} onChange={handleInputChange} />
                                    <label>Consent Residency Flag:</label>
                                    <input type="text" name="emp_cons_res_flag" value={updatedEmployeeData[21]} onChange={handleInputChange} />
                                    <label>Special Pay:</label>
                                    <input type="text" name="emp_spl_pay" value={updatedEmployeeData[22]} onChange={handleInputChange} />
                                    <label>Bank IFSC:</label>
                                    <input type="text" name="emp_bank_ifsc" value={updatedEmployeeData[23]} onChange={handleInputChange} />
                                    <label>Bank Name:</label>
                                    <input type="text" name="emp_bank_name" value={updatedEmployeeData[24]} onChange={handleInputChange} />
                                    <label>Bank Account No:</label>
                                    <input type="text" name="emp_bank_account_no" value={updatedEmployeeData[25]} onChange={handleInputChange} />
                                </div>
                            </div>
                            <button type="submit">Update</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Admin;

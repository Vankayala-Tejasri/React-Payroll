import React, { useState, useEffect } from "react";
import axios from "axios";
import './Salary.css';
import AdminNavbar from "../Admin-navbar/Admin-navbar";

function AllEmployeeSalaries() {
    const [SalaryDetails, setsalarydetails] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        get_salary_details();
    }, []);

    const get_salary_details = async () => {
        try {
            const salary_details = await axios.get(`http://localhost:3001/all_salary_details_Read`);
            console.log(salary_details.data);
            setsalarydetails(salary_details.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleRead = (employee) => {
        setSelectedEmployee(employee);
    };

    return (
        <>
        <AdminNavbar/>
            <h2 ><center>Employee Salaries</center></h2>
            <table id="myTable">
                <thead>
                    <tr className="header">
                        <th>Employee code</th>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Net salary</th>
                        <th>Read</th>
                    </tr>
                </thead>
                <tbody>
                    {SalaryDetails.length > 0 ? (
                        SalaryDetails.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee[2]}</td>
                                <td>{employee[19]}</td>
                                <td>{employee[0]}</td>
                                <td>{employee[1]}</td>
                                <td>{parseFloat(employee[18]).toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => handleRead(employee)}>Read</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No employee salaries found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {selectedEmployee && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Employee Saalary Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setSelectedEmployee(null)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="tabs">
                                    <table className="tab1">
                                        <h3>Gross Details</h3>

                                        <tbody>
                                            {/* <caption>Gross Details</caption> */}
                                            <tr>
                                                <td>Basic Salary:</td>
                                                <td>{selectedEmployee[5]}</td>
                                            </tr>
                                            <tr>
                                                <td>Special pay:</td>
                                                <td>{selectedEmployee[4]}</td>
                                            </tr>
                                            <tr>
                                                <td>Dearness Allowances(DA):</td>
                                                <td>{selectedEmployee[6]}</td>
                                            </tr>
                                            <tr>
                                                <td>House Rent Allowances(HRA):</td>
                                                <td>{selectedEmployee[7]}</td>
                                            </tr>
                                            <tr>
                                                <td>Transport Allowance:</td>
                                                <td>{selectedEmployee[11]}</td>
                                            </tr>
                                            <tr>
                                                <td>Gross Salary:</td>
                                                <td>{selectedEmployee[8]}</td>
                                            </tr>
                                            {/* Add other rows as needed */}
                                        </tbody>
                                    </table>

                                    <table className="tab2">
                                        <tbody>
                                            {/* <caption>Gross Deductions</caption> */}
                                            <h3 align="center">Gross Deductions</h3>
                                            <tr>
                                                <td>Lic Deduction:</td>
                                                <td>{selectedEmployee[9]}</td>
                                            </tr>
                                            <tr>
                                                <td>Advance:</td>
                                                <td>{selectedEmployee[10]}</td>
                                            </tr>
                                            <tr>
                                                <td>Employee State Insurance(ESI):</td>
                                                <td>{selectedEmployee[12].toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Public Provident Fund(PF):</td>
                                                <td>{selectedEmployee[15].toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Employee Provident Fund (EPF):</td>
                                                <td>{selectedEmployee[13].toFixed(2)}</td>
                                            </tr>
                                            {/* <tr>
                                                <td>Family Pension Fund:</td>
                                                <td>{selectedEmployee[14].toFixed(2)}</td>
                                            </tr> */}
                                            <tr>
                                                <td>Others:</td>
                                                <td>{selectedEmployee[16]}</td>
                                            </tr>
                                            <tr>
                                                <td>Gross Deductions :</td>
                                                <td>{selectedEmployee[17].toFixed(2)}</td>
                                            </tr>
                                            {/* Add other rows as needed */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setSelectedEmployee(null)}>ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
}
        </>
    )
}

export default AllEmployeeSalaries;
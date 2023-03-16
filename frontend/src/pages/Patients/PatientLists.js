import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './patient.css';
import baseURL from '../../utils/axios';

const PatientLists = () => {
    const [patientData, patientDataChange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/patient/singlePatient/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/patient/deletePatient/" + id);
    }
    const RemoveFunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            // fetch("http://localhost:5050/api/patient/deletePatient/:id", {
            fetch(`http://localhost:5050/api/patient/deletePatient/${id}`, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }



    useEffect(() => {
        fetch("http://localhost:5050/api/patient/findAll").then((res) => {
            return res.json();
        }).then((resp) => {
            patientDataChange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Patients Lists</h2>
                </div>
                <div className="card-body">
                    <div className="div-btn">
                        <Link to="/patient/createNew" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Mobile</td>
                                <td>Age</td>
                                <td>Birthday</td>
                                <td>Address</td>
                                <td>Avatar</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {patientData &&
                                patientData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.age}</td>
                                        <td>{item.dob}</td>
                                        <td>{item.address}</td>
                                        <td><img src={item.avatar}/></td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { RemoveFunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default PatientLists;
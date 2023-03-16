import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PatientDetail = () => {
    const { id } = useParams();

    const [ patientData, patientDataChange ] = useState({});

    useEffect(() => {
        fetch("http://localhost:5050/api/patient/singlePatient" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            patientDataChange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Patient Create</h2>
                </div>
                <div className="card-body"></div>

                {patientData &&
                    <div>
                        <h2>The Employee name is : <b>{patientData.name}</b>  ({patientData._id})</h2>
                        <h3>Contact Details</h3>
                        <h5>Email is : {patientData.email}</h5>
                        <h5>Phone is : {patientData.phone}</h5>
                        <h3>Personal Details</h3>
                        <h5>Birthday is : {patientData.dob}</h5>
                        <h5>Address is : {patientData.address}</h5>
                        <h5>Face is : {patientData.avatar}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default PatientDetail;
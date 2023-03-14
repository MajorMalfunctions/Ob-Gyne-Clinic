import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { updatePatient, deletePatient } from "../../redux/actions//patient";

import PatientService from "../../redux/services/patient.service";

const Patient = (props) => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialPatientState = {
    id: null,
    name: "",
    email: "",
    mobile: "",
    age: "",
    address: "",
    dob: "",
    avatar: "",
  };
  const [ currentPatient, setCurrentPatient ] = useState(initialPatientState);
  const [ message, setMessage ] = useState("");

  const dispatch = useDispatch();

  const getPatient = id => {
    PatientService.get(id)
      .then(response => {
        setCurrentPatient(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
    getPatient(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentPatient({ ...currentPatient, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentPatient.id,
      name: currentPatient.name,
      email: currentPatient.email,
      mobile: currentPatient.mobile,
      age: currentPatient.age,
      address: currentPatient.address,
      dob: currentPatient.dob,
      avatar: currentPatient.avatar
    };

    dispatch(updatePatient({ id: currentPatient.id, data }))
      .unwrap()
      .then(response => {
        console.log(response);
        setCurrentPatient({ ...currentPatient, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updatePatient({ id: currentPatient.id, data: currentPatient }))
      .unwrap()
      .then(response => {
        console.log(response);
        setMessage("The Patient was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removePatient = () => {
    dispatch(deletePatient({ id: currentPatient.id }))
      .unwrap()
      .then(() => {
        navigate("/patients");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentPatient ? (
        <div className="edit-form">
          <h4>Patient</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentPatient.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={currentPatient.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="mobile"
                className="form-control"
                id="mobile"
                name="mobile"
                value={currentPatient.mobile}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={currentPatient.age}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="address"
                className="form-control"
                id="address"
                name="address"
                value={currentPatient.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Birthday</label>
              <input
                type="dob"
                className="form-control"
                id="dob"
                name="dob"
                value={currentPatient.dob}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="avatar">Avatar</label>
              <input
                type="upload"
                className="form-control"
                id="avatar"
                name="avatar"
                value={currentPatient.avatar}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentPatient.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentPatient.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={removePatient}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Patient...</p>
        </div>
      )}
    </div>
  );
};

export default Patient;
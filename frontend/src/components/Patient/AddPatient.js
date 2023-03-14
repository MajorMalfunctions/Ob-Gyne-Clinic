import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPatient } from "../../redux/actions/patient";

const AddPatient = () => {
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
  const [ patient, setPatient ] = useState(initialPatientState);
  const [ submitted, setSubmitted ] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const savePatient = () => {
    const { name, email, mobile, age, address, dob, avatar } = patient;

    dispatch(createPatient({ name, email, mobile, age, address, dob, avatar }))
      .unwrap()
      .then(data => {
        console.log(data);
        setPatient({
          id: data.id,
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          age: data.age,
          address: data.address,
          dob: data.dob,
          avatar: data.avatar
        });
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPatient = () => {
    setPatient(initialPatientState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPatient}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Fullname:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={patient.name || ''}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={patient.email || ''}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="mobile"
              className="form-control"
              id="mobile"
              required
              value={patient.mobile || ''}
              onChange={handleInputChange}
              name="mobile"
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              required
              value={patient.age || ''}
              onChange={handleInputChange}
              name="age"
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              required
              value={patient.age || ''}
              onChange={handleInputChange}
              name="age"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={patient.address || ''}
              onChange={handleInputChange}
              name="address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Birthday</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              required
              value={patient.dob || ''}
              onChange={handleInputChange}
              name="dob"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Avatar</label>
            <input
              type="upload"
              className="form-control"
              id="avatar"
              required
              value={patient.avatar || ''}
              onChange={handleInputChange}
              name="avatar"
            />
          </div>

          <button onClick={savePatient} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPatient;
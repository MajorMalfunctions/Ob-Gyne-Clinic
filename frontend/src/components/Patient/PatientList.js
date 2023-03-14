import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrievePatients,
  // findPatientsById,
  findPatientsByName,
  deleteAllPatients,
} from "../../redux/actions/patient";

import { Link } from "react-router-dom";
import "../../styles/patient.css";

const PatientList = () => {
  const [ currentPatient, setCurrentPatient ] = useState(null);
  const [ currentIndex, setCurrentIndex ] = useState(-1);
  const [ searchName, setSearchName ] = useState("");
  // const [ searchId, setSearchId ] = useState("");

  const patient = useSelector(state => state.patient);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievePatients());
  }, []);

  // const onChangeSearchId = e => {
  //   const searchId = e.target.value;
  //   setSearchId(searchId);
  // };

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  // const initFetch = useCallback(() => {
  //   dispatch(retrievePatients());
  // }, [dispatch])

  // useEffect(() => {
  //   initFetch()
  // }, [initFetch])

  const refreshData = () => {
    setCurrentPatient(null);
    setCurrentIndex(-1);
  };

  const setActivePatient = (patient, index) => {
    setCurrentPatient(patient);
    setCurrentIndex(index);
  };

  const removeAllPatients = () => {
    dispatch(deleteAllPatients())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    refreshData();
    dispatch(findPatientsByName(searchName));
  };

  // const findById = () => {
  //   refreshData();
  //   dispatch(findPatientsById({ id: searchId }));
  // };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Id"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h4>Patients List</h4>
        <ul className="list-group">
          {patient &&
            patient.map((patient, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePatient(patient, index)}
                key={index}
              >
                {patient.name}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllPatients}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentPatient ? (
          <div>
            <h4>Patient</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentPatient.name}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentPatient.email}
            </div>
            <div>
              <label>
                <strong>Mobile:</strong>
              </label>{" "}
              {currentPatient.mobile}
            </div>
            <div>
              <label>
                <strong>Age:</strong>
              </label>{" "}
              {currentPatient.age}
            </div>
            <div>
              <label>
                <strong>Address:</strong>
              </label>{" "}
              {currentPatient.address}
            </div>
            <div>
              <label>
                <strong>Birthday:</strong>
              </label>{" "}
              {currentPatient.dob}
            </div>
            <div>
              <label>
                <strong>Avatar:</strong>
              </label>{" "}
              {currentPatient.avatar}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentPatient.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/patients/" + currentPatient.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Patient...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientList;
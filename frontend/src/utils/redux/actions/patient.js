import {
  CREATE_PATIENT,
  RETRIEVE_PATIENTS,
  UPDATE_PATIENT,
  DELETE_PATIENT,
  DELETE_ALL_PATIENTS,
} from "./types";

import PatientService from "../services/patient.service";

export const createPatient = (name, email, mobile, age, dob, address, avatar) => async (dispatch) => {
  try {
    const res = await PatientService.create({ name, email, mobile, age, dob, address, avatar });

    dispatch({
      type: CREATE_PATIENT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrievePatients = () => async (dispatch) => {
  try {
    const res = await PatientService.getAll();
    dispatch({
      type: RETRIEVE_PATIENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePatient = (id, data) => async (dispatch) => {
  try {
    const res = await PatientService.update(id, data);

    dispatch({
      type: UPDATE_PATIENT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePatient = (id) => async (dispatch) => {
  try {
    await PatientService.remove(id);

    dispatch({
      type: DELETE_PATIENT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllPatients = () => async (dispatch) => {
  try {
    const res = await PatientService.removeAll();

    dispatch({
      type: DELETE_ALL_PATIENTS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findPatientsByName = (name) => async (dispatch) => {
  try {
    const res = await PatientService.findByName(name);

    dispatch({
      type: RETRIEVE_PATIENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const findPatientsById = (id) => async (dispatch) => {
//   try {
//     const res = await PatientService.findById(id);

//     dispatch({
//       type: RETRIEVE_PATIENTS,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };


// export const addPatient = (patient) => {
//     return (dispatch) => {
//       setTimeout(() => {
//         dispatch(addPatientAsync(patient)); //we call the dispatch function inside another dispatch with help of redux thunk
//       }, 5000);
//     };
//   };

//   export const addPatientAsync = (patient) => {
//     return {
//       type: "ADD_PATIENT",
//       payload: patient
//     };
//   };

//   export const editPatient = (patient) => {
//     return {
//       type: "EDIT_PATIENT",
//       payload: patient
//     };
//   };

//   export const removePatient = (id) => {
//     return {
//       type: "REMOVE_PATIENT",
//       payload: id
//     };
//   };
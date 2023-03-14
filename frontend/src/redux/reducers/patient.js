import {
    CREATE_PATIENT,
    RETRIEVE_PATIENTS,
    UPDATE_PATIENT,
    DELETE_PATIENT,
    DELETE_ALL_PATIENTS,
  } from "../actions/types";

  const initialState = [];

  const patientReducer = (patients = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
      case CREATE_PATIENT:
        return [...patients, payload];

      case RETRIEVE_PATIENTS:
        return payload;

      case UPDATE_PATIENT:
        return patients.map((patient) => {
          if (patient.id === payload.id) {
            return {
              ...patients,
              ...payload,
            };
          } else {
            return patient;
          }
        });

      case DELETE_PATIENT:
        return patients.filter(({ id }) => id !== payload.id);

      case DELETE_ALL_PATIENTS:
        return [];

      default:
        return patients;
    }
  };

  export default patientReducer;
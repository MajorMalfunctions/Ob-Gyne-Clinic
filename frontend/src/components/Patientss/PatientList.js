import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "reactstrap";
import { removePatient } from "../../redux/actions";

const PatientList = () => {
  const patients = useSelector((state) => state.addReducer.patients);
  const dispatch = useDispatch();

  return (
    <ListGroup style={{ marginTop: "20px" }}>
      {patients.length > 0 ? (
        <Fragment>
          {patients.map((patient) => (
            <ListGroupItem className="d-flex" key={patient.id}>
              <strong>{patient.name}</strong>
              <div style={{ marginLeft: "auto" }}>
                <ButtonGroup>
                  <Link to={`/edit/${patient.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <Button
                    onClick={() => dispatch(removePatient(patient.id))}
                    color="danger"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            </ListGroupItem>
          ))}
        </Fragment>
      ) : (
        <h4 className="text-center">No record</h4>
      )}
    </ListGroup>
  );
};
export default PatientList;

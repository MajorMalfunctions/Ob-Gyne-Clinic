import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Label, Input, FormGroup } from "reactstrap";

import { updatePatient } from "../../redux/actions/patient";

const UpdatePatient = (props) => {
    const navigate = useNavigate();

  const [selectedName, setSelectedName] = useState({ id: "", name: "" });
  const dispatch = useDispatch();

  const patients = useSelector((state) => state.addReducer.patients);
  const currentId = props.match.params.id;

  const nameChangeHandler = (event) => {
    setSelectedName({ ...selectedName, name: event.target.value });
  };

  const onSubmitHandler = () => {
    dispatch(updatePatient(selectedName));
    navigate("/");
  };

  useEffect(() => {
    const patientDetail = patients.find((patient) => patient.id === currentId);
    setSelectedName(patientDetail);
  }, [currentId, patients]);

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          onChange={nameChangeHandler}
          value={selectedName.name}
          name="name"
          placeholder="Enter Name"
        />
      </FormGroup>
      <Button type="submit" color="primary" style={{ marginTop: "5px" }}>
        Submit
      </Button>
      <Link
        to="/"
        className="btn btn-danger"
        style={{ marginLeft: "5px", marginTop: "5px" }}
      >
        Cancel
      </Link>
    </Form>
  );
};

export default UpdatePatient;

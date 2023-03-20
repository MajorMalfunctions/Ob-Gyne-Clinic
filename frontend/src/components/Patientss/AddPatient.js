import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Form, Button, Label, Input, FormGroup } from "reactstrap";
import { v4 as uuid } from "uuid";
import { createPatient } from "../../redux/actions/patient";

const AddPatient = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const dispatch = useDispatch();

  const nameChangeHandler = (event) => {
    setName({ id: uuid(), name: event.target.value });
  };

  const onSubmitHandler = () => {
    dispatch(createPatient(name));
    navigate('/');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          onChange={nameChangeHandler}
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

export default AddPatient;

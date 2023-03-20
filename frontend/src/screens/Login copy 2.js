import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { toast } from 'react-toastify';
import "../styles/login.css";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Spinner from "../utils/Spinner";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

import { login } from "../redux/actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ checked, setChecked ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isLoggedin, setIsLoggedin ] = useState(false);

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeChecked = (e) => {
    const checked = e.target.value;
    setChecked(checked);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    form.current.validateAll();
    console.log(email);
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then((res) => {
          setIsLoggedin(true);
          toast.success('success', { position: toast.POSITION.TOP_CENTER})
          navigate("/home");
          window.location.reload();
        })
        .catch((err) => {
          toast.error('Login Error!', { position: toast.POSITION.TOP_CENTER })
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };

  // const logout = () => {
  //   localStorage.clear();
  //   setIsLoggedin(false);
  // };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  };

  return (
    <>
      <div className="login-screen">
        {!isLoggedin ? (
            <form onSubmit={handleLogin}  ref={form} className="login-screen_form">
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>

            </Grid>
          </form>
        ) : (
            <>
           </>
        )}
      </div>
    </>
  );
};

export default Login;

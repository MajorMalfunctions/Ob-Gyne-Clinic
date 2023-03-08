import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { toast } from 'react-toastify';
import "../styles/login.css";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Spinner from "../utils/Spinner";

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
  const [ loading, setLoading ] = useState("");

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

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();
    console.log(email);
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          navigate("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };


  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  };

  return (
    <div className="login-screen">
      <Form onSubmit={handleLogin}  ref={form} className="login-screen_form">
        <h3 className="login-screen_title">Login</h3>

        {/* <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
        </div> */}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Input
            required
            name="email"
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={onChangeEmail}
            validations={[required]}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <Input
            required
            name="password"
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="register-subtexts">Forgot Password?<Link to="/forgot-password">Forgot</Link></p>

        <button type="submit" disabled={loading} className="btn btn-primary">
          {/* {loading && (
                <span className="spinner-border spinner-border-sm"></span>
                // <span> {Spinner} </span>
          )} */}
            {loading ? <Spinner /> : 'Login'}
        </button>

        {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}

        <br />
        <p className="register-subtext">Not Yet A Member?  <Link to="/register">Register Here!</Link></p>
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default Login;

import React, { useRef, useState } from "react";
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
        <>
          <Form onSubmit={handleLogin}  ref={form} className="login-screen_form">

          <div className="image-wrapper">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPow1EO0DUzktzjwrr0b0EmklsxLjvv34v8WzN77E9m7aYuydiCSlGLM4o8XSZoET-n0&usqp=CAU"
                alt="profile-img"
                className="profile-img-card"
              />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="input-field"
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
            <input
              className="input-field"
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
          <Link to="/forgot-password" className="forgot-text">Forgot Password?</Link>

                <input
                    value={checked}
                    onChange={onChangeChecked}
                    type="checkbox"
                    checked={checked}
                    class="form-check-input"
                    id="checkbox"
                /> {" "} {" "} {" "} {" "}
                {" "} {" "} <label className="checkbox-label" for="checkbox">Remember Me</label>

              <button type="submit" disabled={isLoading} className="btn-login">
                <span> {isLoading ? <Spinner /> : 'Login'} </span>
              </button>

          {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}

          <p className="register-subtext">Not Yet A Member?   <Link to="/register" className="reg-text">Register Here!</Link></p>

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </>
        ) : (
            <>
           </>
        )}
      </div>
    </>
  );
};

export default Login;

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
  const [ checked, setChecked ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isLoggedin, setIsLoggedIn ] = useState(false);

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
          // localStorage.setItem('refreshToken', res.data.refreshToken);
          setIsLoggedIn(true);
          toast.success('success', { position: toast.POSITION.TOP_CENTER})
          navigate("/home");
          window.location.reload();
        })
        .catch(() => {
          toast.error('error', { position: toast.POSITION.TOP_CENTER })
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
          {/* <h3 className="login-screen_title">Login</h3> */}

          <div className="card card-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPow1EO0DUzktzjwrr0b0EmklsxLjvv34v8WzN77E9m7aYuydiCSlGLM4o8XSZoET-n0&usqp=CAU"
              // src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />
          </div>

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
          <p className="register-subtexts">Forgot Password?<Link className="dir-link" to="/forgot-password">Forgot</Link></p>

              <div class="form-check">
                <Input
                    value={checked}
                    onChange={onChangeChecked}
                    type="checkbox"
                    checked={checked}
                    class="form-check-input"
                    id="checkbox" />
                <label class="checkbox-label" for="checkbox">Remember Me</label>
              </div>

          <div className="form-group">
              <button type="submit" disabled={isLoading} className="btn btn-primary btn-block">
                {isLoading ? <Spinner /> : 'Login'}
              </button>
          </div>


          {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}

          <br />
          <br />
          <p className="register-subtext">Not Yet A Member?  <Link to="/register">Register Here!</Link></p>
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

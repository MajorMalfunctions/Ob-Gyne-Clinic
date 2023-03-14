import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../redux/actions/auth";
import '../styles/register.css';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vFullname = (value) => {
  if (value.length < 8 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The Fullname must be between 8 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 8 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The Password Must Be Between 8 and 20 characters.
      </div>
    );
  }
};

const Register = () => {
  const navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();

  const [ fullname, setFullname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ successful, setSuccessful ] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeFullname = (e) => {
    const fullname = e.target.value;
    setFullname(fullname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(fullname, email, password))
        .then((res) => {
          console.log(res.message)
          toast.success('success', { position: toast.POSITION.TOP_CENTER})
          setSuccessful(true);
          navigate("/");
        })
        .catch((err) => {
          navigate("/register");
          console.log(err.message)
          toast.error('error', { position: toast.POSITION.TOP_CENTER })
          setSuccessful(false);
        });
    } else {
      setSuccessful(false);
      // setIsLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
      <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="fullname">Fullname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={fullname}
                  onChange={onChangeFullname}
                  validations={[required, vFullname]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <p className="register-subtext">Already A Member?  <Link to="/">Login Here!</Link></p>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
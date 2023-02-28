import React, { useState, useEffect } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import "./css/Login.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useAuth } from "../auth-context";

function Login() {
  const history = useHistory();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [btnLoad, setBtnLoad] = useState(true);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  const onInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setForm((form) => ({ ...form, [e.target.name]: value }));
  };

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnLoad(false);
    console.log(form);

    axios
      .post("account/login", form)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("emailToken", res.data.user.email);
          login();
          history.push("/");
        }
      })
      .catch((err) => {
        setLoginErr(true);
        setBtnLoad(true);
        console.log("ERROR", err);
      });
  };

  const { loggedIn } = useAuth();
  return loggedIn ? (
    <Redirect to="/" />
  ) : (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <main className="form-signin">
          <form onSubmit={handleSubmit}>
            <h1 className="form-h1">Sign In</h1>

            <div className="input-group suFormField">
              <input
                type="email"
                name="email"
                value={email}
                onChange={onInputChange}
                className="input loginInput"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="input-group suFormField">
              <input
                type={isPasswordShown ? "text" : "password"}
                name="password"
                value={password}
                className="input loginInput"
                placeholder="Password"
                onChange={onInputChange}
                required
              />

              {isPasswordShown ? (
                <span
                  onClick={togglePasswordVisiblity}
                  className="material-icons-outlined loginPassword-icon"
                >
                  visibility
                </span>
              ) : (
                <span
                  onClick={togglePasswordVisiblity}
                  className="material-icons-outlined loginPassword-icon"
                >
                  visibility_off
                </span>
              )}
            </div>
            {loginErr ? (
              <p className="pErr text-danger">Invalid Email or Password!</p>
            ) : null}

            {btnLoad ? (
              <button
                className="btn btnDefault btn-purp loginBtn"
                type="submit"
              >
                Log in
              </button>
            ) : (
              <button className="btn btnDefault btn-purp loginBtn">
                <ScaleLoader color="#fff" height={18} />
              </button>
            )}
          </form>
          <p className="rpP">
            <Link to="/ResetPassword">Reset Password</Link>
          </p>
          <p>
            Don't have an account?{" "}
            <Link className="regHere" to="/SignUp">
              REGISTER HERE
            </Link>
          </p>
        </main>
      )}
    </>
  );
}

export default Login;
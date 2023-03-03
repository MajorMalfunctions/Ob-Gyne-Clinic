

import React, { useRef, useState, useEffect, useContext } from 'react';
import '../styles/login.css';
import { Link, useNavigate} from  'react-router-dom';
import AuthContext from "../utils/AuthProvider";
import axios from '../utils/axios';

const Login = () =>  {
   const navigate = useNavigate();
   const { setAuth } = useContext(AuthContext);
   const userRef = useRef();
   const errRef = useRef();

   const [errMsg, setErrMsg] = useState('');
   const [success, setSuccess] = useState(false);

   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
  //  const [ checked, setChecked ] = useState(false);
   const [ loading, setLoading ] = useState(false);
   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;

   const togglePassword = () => {
      setShowPassword(!showPassword);
    };

    // const handleOnChange = () => {
    //   setChecked(!checked);
    // };
    useEffect(() => {
      userRef.current.focus();
  }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post('/api/signin',
              JSON.stringify({ email, password }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(JSON.stringify(response?.data));
          const accessToken = response?.data?.accessToken;
          const refreshToken = response?.data?.refreshToken;
          const roles = response?.data?.roles;
          setAuth({ email, password, roles, accessToken, refreshToken });
          setEmail('');
          setPassword('');
          setSuccess(true);
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 400) {
              setErrMsg('Missing Email or Password');
          } else if (err.response?.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  }


  return(
    <>
                {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
          <div className="login-wrapper">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h2>Please Log In</h2>
      <form>

        <div className="input-icons">
            <i class="fa fa-user icon"></i>
              <input
              ref={userRef}
                class="input-field"
                required
                type="email"
                placeholder="juantamad@mail.com"
                value={email}
                onChange={(e) => {
                   setEmail(e.target.value)
                }}
              />

          <div className="pwd-container">
            <i class="fa fa-lock icon"></i>
                  <input
                    class="input-field"
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="***********"
                    value={password}
                    onChange={(e) => {
                       setPassword(e.target.value)
                    }}
                    />
                <span onClick={() => {togglePassword(changeIcon);}}>
                   {changeIcon ? <i class="fa fa-eye" icons/> : <i class="fa fa-eye-slash" icons/>}
                </span>
          </div>

        </div>

         {/* <div className="checkbox">
         <input name="remember"
            type="checkbox"
            id="checkbox"
            value={checked}
            checked="agree"
            onChange={handleOnChange}
            // onChange={(e) => { setChecked(e.target.value)}}  />
          <label htmlFor="remember">Keep Me Signin</label>
         </div> */}

        <div>
          <button value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} type="submit" disabled={loading}>Login {' '}{' '}<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </div>
        <p>  <Link to="/register">Register Here!</Link></p>
      </form>
    </div>
     )}
    </>
  )
}

export default Login;

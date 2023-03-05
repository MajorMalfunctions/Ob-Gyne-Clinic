import React, { useRef, useState, useEffect } from 'react';
import '../styles/login.css';
import { Link, useNavigate} from 'react-router-dom';
import axios from '../utils/axios';
// import Spinner from "../utils/spinner";
import { toast } from 'react-toastify';

const Login = () =>  {
   const navigate = useNavigate();

   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
   const [ checked, setChecked ] = useState(false);
  //  const [ showPassword, setShowPassword ] = useState(false);
  //  const changeIcon = showPassword === true ? false : true;
   const [error, setError] = useState("");

  //  const togglePassword = () => {
  //     setShowPassword(!showPassword);
  //   };

    const handleOnChange = () => {
      setChecked(!checked);
    };

    const handleLogin = async (e) => {
      // e.preventDefault();
        if (validate()) {
      await axios.post(
        'http://localhost:5050/api/auth/signin',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            // "x-access-token": "token-value",
            "Content-Type": "application/json"
          },
        })
        .then((res) =>  {
          // alert('SUCCESS')
          toast.success('Login Success');
          const token =  (email, password);
          if (token) {
            console.log('Success')
            console.log(res.data)
            localStorage.setItem('accessToken', res.data.accessToken)
            localStorage.setItem('refreshToken', res.data.refreshToken)
            sessionStorage.setItem('session-user', res.email);
            navigate('/')
          }
       })
       .then((res) => {
        navigate("/login")
       })
       .catch(err => {
        toast.error('Login Failed')
        //  alert(error.message)
         console.log(err.message)
       })
      }
    }

    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('Please Enter Email Address');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }


  return(
    <>
      <div className="login-screen">
        <form onSubmit={handleLogin} className="login-screen_form">
        <h2 className="login-title">Login</h2>
        {error && <span className="error-message">{error}</span>}

          <div className="form-group">
              {/* <i class="fa fa-user icon"></i> */}
              <label htmlFor="email">Email:</label>
                <input
                  required
                  type="email"
                  placeholder="juantamad@mail.com"
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value)
                  }}
                />
          </div>

          <div className="form-group">
          <label htmlFor="password">Password  :</label>
            {/* <i class="fa fa-lock icon"></i> */}
                  <input
                    required
                    type="password"
                    // type={showPassword ? "text" : "password"}
                    placeholder="***********"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    />
                {/* <span onClick={() => {togglePassword(changeIcon);}}>
                    {changeIcon ? <i class="fa fa-eye" icons/> : <i class="fa fa-eye-slash" icons/>}
                </span> */}
          </div>

          <p className="login-subtexts"> Forgot Password? <Link to="/forgot-password" className="login-forgot">Forgot!</Link></p>

          <button onClick={handleLogin} type="submit" className="btn btn-primary">Login {' '}{' '}<i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            <br />
            <br />
          <p className="login-subtext">Not A Member Yet?  <Link to="/register">Register Here!</Link></p>
        </form>
    </div>
    </>
  )
}

export default Login;

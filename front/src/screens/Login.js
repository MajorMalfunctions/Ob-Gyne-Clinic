import React, { useState } from 'react';
import '../styles/login.css';
import { Link, useNavigate} from  'react-router-dom';
import axios from 'axios';

const Login = () =>  {
   const navigate = useNavigate();

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

   const handleLogin = (e) => {
      e.preventDefault();
      navigate('/')
      setLoading(true);
      console.log({ email, password})
      axios.post('http://localhost:5050/auth/signin',
      {
        email: email,
        password: password
      })

   .then(resp => {
    const token =  (email, password);
    localStorage.setItem("accessToken", resp.data.accessToken);
    localStorage.setItem("refreshToken", resp.data.refreshToken)
    localStorage.setItem("email", resp.data.email);
    console.log(resp);
        setLoading(false);
         }).catch(error => {
        console.log(error.message)
        setLoading(false);
      });
   }

  return(
    <div className="login-wrapper">
      <h2>Please Log In</h2>
      <form>

        <div className="input-icons">
            <i class="fa fa-user icon"></i>
              <input
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
  )
}

export default Login;

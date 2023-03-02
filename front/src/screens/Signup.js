import React, {useState} from 'react';
import '../styles/login.css';
import { Link, useNavigate} from  'react-router-dom';
import axios from 'axios';


const Register = () =>  {
  const navigate = useNavigate();

   const [ name, setName ] =  useState("");
   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
   const [ loading, setLoading ] = useState(false);

   const handleRegister = (e) => {
    e.preventDefault();
    navigate('/')
    setLoading(true);
    console.log({ email, password})
    axios.post('http://localhost:5050/auth/signup',
    { email: email, password: password })

 .then(resp => {
      setLoading(false);
       localStorage.setItem("accessToken", 'token');
       localStorage.setItem('refreshToken', 'refreshToken')
       }).catch(error => {
      console.log(error.message)
      setLoading(false);
    });
 }

  return(
    <div className="login-wrapper">
      <h2>Register Now!</h2>
      <form>
      <label>
          <p>Full Name:</p>
          <input
            required
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
               setName(e.target.value)
            }}
          />
        </label>

        <label>
          <p>Email:</p>
          <input
            required
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
               setEmail(e.target.value)
            }}
          />
        </label>

        <label>
          <p>Password:</p>
          <input
            required
            type="password"
            placeholder="***********"
            value={password}
            onChange={(e) => {
               setPassword(e.target.value)
            }}
            />
        </label>
        <div>
          <button onClick={handleRegister}  type="submit">Submit</button>
        </div>

        <p>  <Link to="/login">Login Now!</Link></p>

      </form>
    </div>
  )
}

export default Register;
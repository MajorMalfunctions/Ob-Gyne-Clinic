import { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from 'react-router-dom';
import "../styles/register.css";
import { toast } from 'react-toastify';

const Register = ({ history }) => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
       e.preventDefault();
    await axios.post(
      'http://localhost:5050/api/auth/signup',
      {
        fullname: fullname,
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
        console.log(res.data)
        alert('SUCCESS')
        const token =  (fullname, email, password);
        if (token) {
          localStorage.setItem('accessToken', res.data.accessToken)
          toast.success('success')
          navigate('/login')
        }
        if (email !== password) {
          toast.error('Passwords do not match')
        } else {
          toast.success('Auth Success')
        }
     })
     .catch(err => {
      toast.error('error')
       alert('ERROR')
       alert(err.message)
       console.log(err)
       navigate("/register");
     })

  }

  return (
    <div className="register-screen">
      <form onSubmit={handleRegister} className="register-screen_form">
        <h3 className="register-screen_title">Register</h3>
        {error && <span className="error-message">{error}</span>}

        <div className="form-group">
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleRegister} type="submit" className="btn btn-primary">
          Register
        </button>
        <br />
        <br />
        <p className="register-subtext">Already A Member?  <Link to="/login">Login Here!</Link></p>
      </form>
    </div>
  );
};

export default Register;

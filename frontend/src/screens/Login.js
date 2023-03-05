import { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from 'react-router-dom';
import "../styles/login.css";
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
       e.preventDefault();
    await axios.post(
      'http://localhost:5050/api/auth/signin',
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((res) =>  {
        console.log(res.data)
        toast.success('success', { position: toast.POSITION.TOP_CENTER})
        const token =  (email, password);
        if (token) {
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          localStorage.setItem('name', res.fullname)
          sessionStorage.setItem('session-user', res.email);
        }
        if (email === password) {
          toast.error("Passwords do not match")
        } else {
          // toast.success('Auth Success')
          navigate('/home')
        }
     })
     .catch(err => {
      toast.error('Login Error', { position: toast.POSITION.TOP_CENTER})
      //  alert('ERROR')
      //  alert(err.message)
       console.log(err)
       navigate("/");
     })

  }

  return (
    <div className="login-screen">
      <form onSubmit={handleLogin} className="login-screen_form">
        <h3 className="login-screen_title">Login</h3>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email Address"
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

        <button onClick={handleLogin} type="submit" className="btn btn-primary">
          Login
        </button>
        <br />
        <br />
        <p className="register-subtext">Already A Member?  <Link to="/">Login Here!</Link></p>
      </form>
    </div>
  );
};

export default Login;

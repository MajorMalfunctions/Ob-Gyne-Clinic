import { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from 'react-router-dom';
import "../styles/login.css";
import { toast } from 'react-toastify';
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading} = useLogin()


  const handleLogin = async (e) => {
       e.preventDefault();
    // await login(email, password)
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
        const token =  (email, password);
        if (token) {
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          // navigate("/admin")
          // navigate("/moderator")
          // navigate("/dashboard")
          navigate("/profile")
        }
        toast.success('success', { position: toast.POSITION.TOP_CENTER})
     })
     .catch(err => {
      toast.error('Login Error', { position: toast.POSITION.TOP_CENTER})
       console.log(err)
       navigate("/login");
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
        <p className="register-subtexts">Forgot Password?<Link to="/forgot-password">Forgot</Link></p>

        <button disabled={isLoading} type="submit" className="btn btn-primary">
          Login
        </button>
        {error && <div className="error">{error}</div>}
        <br />
        <br />
        <p className="register-subtext">Not Yet A Member?  <Link to="/register">Register Here!</Link></p>
      </form>
    </div>
  );
};

export default Login;

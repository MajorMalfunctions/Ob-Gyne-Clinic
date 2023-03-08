import { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from 'react-router-dom';
import "../styles/register.css";
import { toast } from 'react-toastify';
import Form from '../utils/Forms';
import Spinner from '../utils/Spinner'
import Error from '../utils/Error'

const Register = () => {
  const navigate = useNavigate();
  // const { loading, userInfo, error } = useSelector((state) => state.auth)

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
       e.preventDefault();
    await axios.post(
      'http://localhost:5050/api/auth/signup',{
        fullname: fullname,
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
        console.log(res.message)
        toast.success('success', { position: toast.POSITION.TOP_CENTER})
        const token =  (fullname, email, password);
        if (token) {
          localStorage.setItem('accessToken', res.data.user)
          localStorage.setItem('accessToken', res.data.accessToken)
          navigate('/profile')
        }
        console.log(res.status)
        console.log(res.data)

        // if (res.status(400).send({  message: "Email Alreay Exists"})){
        // }  else {
        //   res.status(200).send({ message: 'success'})
        //   console.log('success')
        // }
     })
     .catch(error => {
      //  toast.error('error')
      alert('ERROR')
      alert(error.message)
      console.log(error)
      console.log(error.message)
      console.log(error.res.data.err.message)
      navigate("/register");
     })

  }

  return (
    <div className="register-screen">
    {/* {error && <Error>{error}</Error>} */}
      <form onSubmit={handleRegister} className="register-screen_form">
        <h3 className="register-screen_title">Register</h3>

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
        {/* <button type="submit" className="btn btn-primary" disabled={loading}> */}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        {/* {loading ? <Spinner /> : 'Login'} */}
        {/* {error && <div className="error">{error}</div>} */}
        <br />
        <br />
        <p className="register-subtext">Already A Member?  <Link to="/login">Login Here!</Link></p>
      </form>
    </div>
  );
};

export default Register;

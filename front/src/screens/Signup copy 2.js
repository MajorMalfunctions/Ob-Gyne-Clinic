import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate} from  'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from "../utils/spinner";
import { register, reset } from '../utils/redux/auth/authSlice'


const Register = () =>  {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()

    if (email !== password) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }


  return(
    <div className="login-wrapper">
      <h2>Register Now!</h2>
      <form onSubmit={onSubmit}>
      <label>
          <p>Full Name:</p>
          <input
            required
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            value={name}
            onChange={onChange}
          />
        </label>

        <label>
          <p>Email:</p>
          <input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={onChange}
            // onChange={(e) => {
            //    setEmail(e.target.value)
            // }}
          />
        </label>

        <label>
          <p>Password:</p>
          <input
            required
            name="password"
            id="password"
            type="password"
            placeholder="***********"
            value={password}
            onChange={onChange}
            // onChange={(e) => {
            //    setPassword(e.target.value)
            // }}
            />
        </label>
        <div>
          <button onClick={onSubmit}  type="submit">Submit</button>
        </div>

        <p>  <Link to="/login">Login Now!</Link></p>

      </form>
    </div>
  )
}

export default Register;
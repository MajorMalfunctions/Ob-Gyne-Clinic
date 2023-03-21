import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import RiseLoader from "react-spinners/RiseLoader";
import '../../styles/layout.css';

import About from "../About";
import Home from "../Home";
import Service from "../Service";
import Contact from "../Contact";

import Login from "../Login";
import Register from "../Register";
import Profile from "../../pages/Profile/Profile.js";
import Forgot from "../Forgot";
import Reset from "../Reset";

import Dashboard from "../../pages/Dashboard/Dashboard";

import Booking from '../../components/Booking/Booking';
import AddBooking from '../../components/Booking/AddBooking';
import BookingList from '../../components/Booking/BookingList';

import NotFound from "../NotFound";
import Protected from '../../routes/Protected';

import Blog from "../../pages/Blog/Blog";
import CreateBlog from '../../pages/Blog/CreateBlog';
import BlogDetails from '../../pages/Blog/BlogDetails';

import PatientLists from '../../pages/Patients/PatientLists';
import PatientCreate from '../../pages/Patients/patientCreate';
import PatientDetail from '../../pages/Patients/PatientDetail';
import PatientEdit from '../../pages/Patients/PatientEdit';

import Todo from  '../../components/Todo/Todo';
import AddTodo from  '../../components/Todo/AddTodo';
import ListTodos from  '../../components/Todo/ListTodos';

import { Link } from  "react-scroll";

function Layout() {
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {/* <Scroll /> */}
      <div className="main">
      { loading ? (
          // <RiseLoader size={30} color={"#F37A"} loading={loading} />
          <RiseLoader
            color="#F37A"
            aria-label='Loading Spinner'
            data-testId="loader"
            cssOverride={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              margin: '0 auto',
              marginTop: '250px"',
              textAlign: 'center',
              width: '100%',
              height: '100vh',
            }}
            loading
            size={40}
            speedMultiplier={2.5}
          />
      ) : (
        <Routes>
          <Route exact path="/home" element={
            <Protected>
              <Home />
            </Protected>
          }/>
      
          <Route path="/todo" element={<Todo />} />
          <Route path="/addTodo" element={<addTodo />} />
          <Route path="/todo-list" element={<ListTodos />} />
      
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
      
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
      
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password/:resetToken" element={<Reset />} />
      
          {/* <Route path="/booking/findAll" element={<BookingList />} />
          <Route path="/booking/create" element={<AddBooking />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:id" element={<BookingList />} /> */}
      
          <Route path="/booking/findAll" element={<BookingList />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/create" element={<AddBooking />} />
          <Route path="/booking/:id" element={<BookingList />} />
      
      
          <Route path="/profile" element={<Profile />} />
      
          {/* <Route path="/blog/search" element={<Search />} /> */}
      
          <Route path="/blogs" element={
            <Protected>
              <Blog />
            </Protected>
          } />
      
          <Route path="/blog/:id" element={
            <Protected>
              <BlogDetails />
            </Protected>
          } />
      
          <Route path="/blog/create" element={
            <Protected>
              <CreateBlog />
            </Protected>
          } />
      
          <Route path="/patient" element={<PatientLists />}> </Route>
          <Route path="/patient/createNew" element={<PatientCreate />}> </Route>
          <Route path="/patient/updateSingle/:id" element={<PatientDetail />}> </Route>
          <Route path="/patient/singlePatient/:id" element={<PatientEdit />}> </Route>
      
          <Route path="/Profile" element={
            <Protected>
              <Profile />
            </Protected>
          } />
      
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            } />
      
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      </div>
    </>
  )
}

export default Layout;
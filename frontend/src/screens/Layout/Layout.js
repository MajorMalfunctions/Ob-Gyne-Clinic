import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import About from "../About";
import Home from "../Home";
import Service from "../Service";
import Contact from "../Contact";

import Login from "../Login";
import Register from "../Register";
import Profile from "../../pages/Profile/Profile.js";
import Forgot from "../Forgot";
import Reset from "../Reset";

// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import ScrollUp from "../../components/ScrollUp/ScrollUp";

import Dashboard from "../../pages/Dashboard/Dashboard";
// import User from "../../components/User/User";

import Booking from '../../components/Booking/Booking';
import AddBooking from '../../components/Booking/AddBooking';
import BookingList from '../../components/Booking/BookingList';

import NotFound from "../NotFound";
import Protected from '../../routes/Protected';

// import AddPatient from '../../components/Patient/AddPatient';
// import EditPatient from '../../components/Patient/EditPatient';
// import PatientList from '../../components/Patient/PatientList';
// import Patient from '../../components/Patient/Patient';

import Blog from "../Blog";
import Create from '../../components/Create/Create';
import Details from '../../components/Details/Details';

import PatientLists from '../../pages/Patients/PatientLists';
import PatientCreate from '../../pages/Patients/patientCreate';
import PatientDetail from '../../pages/Patients/PatientDetail';
import PatientEdit from '../../pages/Patients/PatientEdit';

import Todo from  '../../components/Todo/Todo';
import AddTodo from  '../../components/Todo/AddTodo';
import ListTodos from  '../../components/Todo/ListTodos';


export default function Layout() {
  return (
    <>
    {/* <Navbar /> */}
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
      {/* <Route path="/reset-password/:${resetToken}" element={<Reset />} /> */}

          <Route path="/booking/findAll" element={<BookingList />} />
          <Route path="/booking/create" element={<AddBooking />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:id" element={<BookingList />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/blogs" element={
            <Protected>
              <Blog />
            </Protected>
          } />

          <Route path="/blog/:id" element={
            <Protected>
              <Details />
            </Protected>
          } />

          <Route path="/blog/create" element={
            <Protected>
              <Create />
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
      <ToastContainer />
      {/* <Footer />
      <ScrollUp /> */}
    </>
  )
}
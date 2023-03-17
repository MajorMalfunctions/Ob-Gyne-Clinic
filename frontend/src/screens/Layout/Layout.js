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
import Profile from "../Profile";
import Forgot from "../Forgot";
import Reset from "../Reset";

import Dashboard from "../../pages/Dashboard/Dashboard";
import Consult from "../../components/Consult/Consult";


import Booking from '../../components/Booking/Booking';
import AddBooking from '../../components/Booking/AddBooking';
import BookingList from '../../components/Booking/BookingList';

// import Blog from '../../components/Blog/Blog';
// import AddBlog from '../../components/Blog/AddBlog';
// import BlogList from '../../components/Blog/BlogList';

import NotFound from "../NotFound";
import Protected from '../../routes/Protected';

// import AddPatient from '../../components/Patient/AddPatient';
// import EditPatient from '../../components/Patient/EditPatient';
// import PatientList from '../../components/Patient/PatientList';
// import Patient from '../../components/Patient/Patient';

import Blog from "../Blog";
import Create from '../../components/Create/Create';
import Details from '../../components/Details/Details';
import Account from '../../components/Account/Account';


import PatientLists from '../../pages/Patients/PatientLists';
import PatientCreate from '../../pages/Patients/patientCreate';
import PatientDetail from '../../pages/Patients/PatientDetail';
import PatientEdit from '../../pages/Patients/PatientEdit';


export default function Layout() {
  return (
    <>
        <Routes>
          <Route exact path="/home" element={
            <Protected>
              <Home />
            </Protected>
          }/>

          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
      {/* <Route path="/reset-password/:${resetToken}" element={<Reset />} /> */}

          <Route path="/booking/findAll" element={<BookingList />} />
          <Route path="/booking/create" element={<AddBooking />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:id" element={<BookingList />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/create" element={<Create />} />
          <Route path="/blog/details/:id" element={<Details />} />
          <Route path="/blog/account" element={<Account />} />

          <Route path="/consult" element={<Consult />} />

          {/* <Route path="/blog/findAll" element={<BlogList />} />
          <Route path="/blog/create" element={<AddBlog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} /> */}

          {/* <Route path="/patient/findAll" element={<PatientList />} />
          <Route path="/patient/create" element={<AddPatient />} />
          <Route path="/patient/:id" element={<EditPatient />} />
          <Route path="/patient" element={<Patient />} /> */}


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
    </>
  )
}
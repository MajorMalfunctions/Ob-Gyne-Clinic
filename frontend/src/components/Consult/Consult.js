import React, { useState, useRef } from 'react';
import '../../styles/consultation.css';
import { toast } from 'react-toastify';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../utils/Spinner";

const Consult = (props) => {
    const navigate = useNavigate();

    const [ name, setName] = useState("");
    const [ time, setTime] = useState("");
    const [ date, setDate] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isLoggedin, setIsLoggedin ] = useState(false);

    const dateInputRef = useRef(null);
    const timeInputRef = useRef(null);
    const nameInputRef = useRef(null);

    const form = useRef();
    const checkBtn = useRef();

    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const onChangeName = (e) => {
      const name = e.target.value;
      setName(name);
    };

    const onChangeTime = (e) => {
      const time = e.target.value;
      setTime(time);
    };

    const onChangeDate = (e) => {
      const date = e.target.value;
      setDate(date);
    };

    const handleBooking = async (e) => {
        console.log('book')
        e.preventDefault();

        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };

        try {
          const { data } = await axios.post(
            "http://localhost:5050/api/booking/create",
            { name, time, date },
            config
          );
          toast.success('Booking Added!', { position: toast.POSITION.TOP_CENTER })
          console.log('Booking Added!');
          localStorage.setItem("user", data);
          // alert('Booking Added!');
          // navigate("/contact");
        } catch (error) {
      };

      };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleBooking} ref={form}>

        {/* <label>Name:</label> */}
        <i class="fa-solid fa-user"></i>
        {" "}{" "}{" "}
          <input
            ref={nameInputRef}
            className="input-field"
            type="text"
            placeholder="Fullname"
            id="name"
            value={name}
            // onChange={e => setName(e.target.value)}
            onChange={onChangeName}
            required
          />
          <span class="validity"></span>

        {/* <label>Time:</label> */}
          <input
            min="10:00"
            max="16:30"
            ref={timeInputRef}
            className="input-field"
            type="time"
            placeholder="Time"
            id="time"
            value={time}
            // onChange={e => setTime(e.target.value)}
            onChange={onChangeTime}
            required
          />
          <span class="validity"></span>

        {/* <label>Date:</label> */}
          <input
            min="2023-22-03"
            // max="2023-12-12"
            ref={dateInputRef}
            // pattern="\d{4}-\d{2}-\d{2}"
            required
            className="input-field"
            type="date"
            placeholder="Date"
            id="date"
            value={date}
            // onChange={e => setDate(e.target.value)}
            onChange={onChangeDate}
          />
          <span class="validity"></span>

          <button type="submit" disabled={isLoading}>
                <span> {isLoading ? <Spinner /> : 'Book'} </span>
          </button>

        {/* <button onClick={handleBooking} className="consult-button">Book</button> */}
      </form>
    </div>
  )
}

export default Consult
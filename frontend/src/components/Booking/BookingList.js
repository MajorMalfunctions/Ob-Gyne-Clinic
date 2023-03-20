import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveBookings,
  findBookingsByName,
  deleteBooking,
  deleteAllBookings,
} from "../../redux/actions/booking";
import BookService from "../../redux/services/booking.service";

import "../../styles/booking.css";

const BookingList = () => {
  const [ currentBooking, setCurrentBooking ] = useState(null);
  const [ currentIndex, setCurrentIndex ] = useState(-1);
  const [ searchName, setSearchName ] = useState("");

  const booking = useSelector(state => state.booking);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveBookings());
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const refreshData = () => {
    setCurrentBooking(null);
    setCurrentIndex(-1);
  };

  const setActiveBooking = (booking, index) => {
    setCurrentBooking(booking);
    setCurrentIndex(index);
  };
  
  const removeBooking = () => {
    dispatch(deleteBooking())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeAllBookings = () => {
    dispatch(deleteAllBookings())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    refreshData();
    dispatch(findBookingsByName(searchName));
  };

  return (
    <div className="booking_container">
      <div className="top list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            className="search_bar"
            type="text"
            // className="form-control"
            placeholder="Search Name"
            value={searchName}
            onChange={onChangeSearchName}
          />
            <button
              className="search_button"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
        </div>
      </div>

      <div className="book-list col-md-6">
        <h4>Bookings List</h4>
        <ul className="list-group">
          {booking   &&
            booking.map((booking, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveBooking(booking, index)}
                key={index}
              >
                {/* {booking._id} */}
                {booking.name}
              </li>
            ))}
        </ul>

        <button
          id="del-btn"
          className="button-booking1"
          onClick={removeAllBookings}
        >
          Remove All
        </button>
      </div>

      <div className="output_box col-md-5">
        {currentBooking ? (
          <div>
            <h4>Result</h4>
            <div>
              <label>
                <strong>Booking ID:</strong>
              </label>{" "}
              {currentBooking._id}
            </div>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentBooking.name}
            </div>
            <div>
              <label>
                <strong>Time:</strong>
              </label>{" "}
              {currentBooking.time}
            </div>
            <div>
              <label>
                <strong>Date:</strong>
              </label>{" "}
              {currentBooking.date}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentBooking.published ? "Published" : "Pending"}
            </div>
            <button
              to={"/booking/:id" + currentBooking._id}
              className=""
              onClick={removeBooking}
            >
              Delete
            </button>
            <button
              to={"/booking/:id" + currentBooking._id}
              className=""
            >
              Edit
            </button>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Booking...</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default BookingList;
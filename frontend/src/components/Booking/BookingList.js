import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveBookings,
  findBookingsByName,
  deleteAllBookings,
} from "../../redux/actions/booking";
import { Link } from "react-router-dom";

const BookingList = () => {
  const [ currentBooking, setCurrentBooking ] = useState(null);
  const [ currentIndex, setCurrentIndex ] = useState(-1);
  const [ searchName, setSearchName ] = useState("");

  const bookings = useSelector(state => state.bookings);
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
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Bookings List</h4>

        <ul className="list-group">
          {bookings &&
            bookings.map((booking, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveBooking(booking, index)}
                key={index}
              >
                {booking.name}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllBookings}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentBooking ? (
          <div>
            <h4>Name</h4>
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

            <Link
              to={"/bookings/" + currentBooking.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Booking...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingList;
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBooking, deleteBooking } from "../../redux/actions/booking";
import BookingDataService from "../../redux/services/booking.service";

const Booking = (props) => {
  const initialBookingState = {
    id: null,
    name: "",
    time: "",
    date: "",
    published: false
  };
  const [currentBooking, setCurrentBooking] = useState(initialBookingState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getBooking = id => {
    BookingDataService.get(id)
      .then(response => {
        setCurrentBooking(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getBooking(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBooking({ ...currentBooking, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentBooking.id,
      name: currentBooking.name,
      time: currentBooking.time,
      date: currentBooking.date,
      // description: currentBooking.description,
      published: status
    };

    dispatch(updateBooking(currentBooking.id, data))
      .then(response => {
        console.log(response);

        setCurrentBooking({ ...currentBooking, published: status });
        setMessage("The Status Was Updated Successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateBooking(currentBooking.id, currentBooking))
      .then(response => {
        console.log(response);

        setMessage("The Booking Was Updated Successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeBooking = () => {
    dispatch(deleteBooking(currentBooking.id))
      .then(() => {
        props.history.push("/Bookings");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentBooking ? (
        <div className="edit-form">
          <h4>Booking</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                value={currentBooking.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                className="form-control"
                id="time"
                name="time"
                value={currentBooking.time}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={currentBooking.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentBooking.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentBooking.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={removeBooking}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Booking...</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
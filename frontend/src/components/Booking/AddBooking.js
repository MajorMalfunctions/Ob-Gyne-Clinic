import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooking } from "../../redux/actions/booking";

const AddBooking = () => {
  const initialBookingState = {
    id: null,
    name: "",
    time: "",
    date: "",
    published: false
  };
  const [ booking, setBooking ] = useState(initialBookingState);
  const [ submitted, setSubmitted ] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  const saveBooking = () => {
    const { name, time, date } = booking;

    dispatch(createBooking(name, time, date))
      .then(data => {
        setBooking({
          id: data.id,
          name: data.name,
          time: data.time,
          date: data.date,
          // description: data.description,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newBooking = () => {
    setBooking(initialBookingState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newBooking}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              className="form-control"
              id="name"
              required
              value={booking.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              required
              value={booking.time}
              onChange={handleInputChange}
              name="time"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              required
              value={booking.date}
              onChange={handleInputChange}
              name="date"
            />
          </div>

          <button onClick={saveBooking} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddBooking;
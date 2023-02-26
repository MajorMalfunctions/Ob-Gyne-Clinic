import React, {useState } from 'react';
import '../../styles/hero.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BookForm = () => {
  const [ name, setName] = useState("");
  const [ contact, setContact] = useState("");
  const [ time, setTime] = useState("");
  const [ date, setDate] = useState("");
  const [active, setActive] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setActive(!active);
    
    alert('Booking Added!');
    console.log('Booking Added!');
  }
  return (
    <>
          <Popup trigger=
                {<button className="btnClass"> Online Booking </button>}
                 nested
                 modal
                 closeOnDocumentClick
                 position="center"
                 >
                {
                  close => (
                    <div className="form-container">
                    <h1>Book Now!</h1>
                      <form>
                         {/* <i className="fa-regular fa-user icon fa-2x"></i> */}
                         <label>Full Name:</label>
                         <input
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                        {/* <i class="fa-regular fa-phone icon fa-2x"></i> */}
                        <label>Phone Number:</label>
                         <input
                           id="contact"
                           name="contact"
                           type="number"
                           placeholder="Phone number"
                           value={contact}
                           onChange={e => setContact(e.target.value)}
                          />
                         {/* <i class="fa-regular fa-clock icon fa-2x"></i> */}
                         <label>Time:</label>
                         <input
                           id="time"
                           name="time"
                           type="time"
                           placeholder="Time"
                           value={time}
                           onChange={e => setTime(e.target.value)}
                          />
                         {/* <i class="fa-regular fa-calendar icon fa-2x"></i> */}
                         <label>Date:</label>
                         <input
                            id="date"
                            name="date"
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                          />
                        <br />
                      </form><br />
                        <button onClick={handleBooking}>Book{' '}{' '}{' '}<i class="fa-solid fa-paper-plane"> </i></button>
                        <br />
                        { active ? `Hello, ${name} Booked ${time} : ${date}` : ""}
                </div>
                  )
                }
          </Popup>
    </>
  )
}

export default BookForm;
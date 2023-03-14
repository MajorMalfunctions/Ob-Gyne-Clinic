import React, {useState } from 'react';
import '../../styles/hero.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Hero (props) {
  const navigate=useNavigate();

    const [ name, setName] = useState("");
    const [ contact, setContact] = useState("");
    const [ time, setTime] = useState("");
    const [ date, setDate] = useState("");
    const [ active, setActive ] = useState(false);

    const handleBooking = async (e) => {
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
        console.log('Booking Added!');
        localStorage.setItem("user", data);
        alert('Booking Added!');
        console.log('booking added');

        navigate("/contact");
        console.log('booking added');
      } catch (error) {
    };

    };

  return (
    <>
      <div className={props.cName}>
        <img
          alt="HeroImg"
          className="bgImg"
          src={props.heroImg}
        />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          {/* <span className="props.btnClass">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Fellow, Philippine Obstetrical and Gynecological Society')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(1500)
                  // .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }}
            />
          </span> */}
          {props.buttonText}
            <Popup trigger=
                {<button className={props.btnClass}> Online Booking </button>}
                 modal
                 closeOnDocumentClick
                 position="center"
                 >
                    <div className="form-container">
                    <h1>Book Now!</h1>
                      <form>
                         <label>Full Name:</label>
                         <input
                          required
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                        <label>Phone Number:</label>
                         <input
                          required
                           id="contact"
                           name="contact"
                           type="number"
                           placeholder="Phone number"
                           value={contact}
                           onChange={e => setContact(e.target.value)}
                          />
                         <label>Time:</label>
                         <input
                          required
                           id="time"
                           name="time"
                           type="time"
                           placeholder="Time"
                           value={time}
                           onChange={e => setTime(e.target.value)}
                          />
                         <label>Date:</label>
                         <input
                            required
                            id="date"
                            name="date"
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                          />
                        <br />
                      </form><br />
                        <button onClick={handleBooking} className="book-btn">Book{' '}{' '}{' '}<i class="fa-solid fa-paper-plane"> </i></button>
                        <br />
                        { active ? `Hello, ${name} Booked ${time} : ${date}` : ""}
                        console.log('booking added');
                </div>
          </Popup>
        </div>
        <div>
    </div>
      </div>
    </>
  )
}

export default Hero;
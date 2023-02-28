import React, {useState } from 'react';
import '../../styles/hero.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Hero (props) {
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
          <a>
            <Popup trigger=
                {<button className={props.btnClass}> Online Booking </button>}
                 nested
                 modal
                 closeOnDocumentClick
                 position="center"
                 >
                    <div className="form-container">
                    <h1>Book Now!</h1>
                      <form>
                         <label>Full Name:</label>
                         <input
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                        <label>Phone Number:</label>
                         <input
                           id="contact"
                           name="contact"
                           type="number"
                           placeholder="Phone number"
                           value={contact}
                           onChange={e => setContact(e.target.value)}
                          />
                         <label>Time:</label>
                         <input
                           id="time"
                           name="time"
                           type="time"
                           placeholder="Time"
                           value={time}
                           onChange={e => setTime(e.target.value)}
                          />
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
          </Popup>
          </a>
        </div>
        <div>
    </div>
      </div>
    </>
  )
}

export default Hero;
import React, {useState } from 'react';
import '../../styles/hero.css';
import Modal from 'react-modal';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Hero (props) {
  const [ openModal, setOpenModal] = useState(false);

  const setOpenModalToTrue = () => {
    setOpenModal(true)
  }

  const setOpenModalToFalse = () => {
    setOpenModal(false)
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
                         <input type="text" placeholder="Name" />
                         {/* <i class="fa-regular fa-clock icon fa-2x"></i> */}
                         <input type="time" placeholder="Time" />
                         {/* <i class="fa-regular fa-calendar icon fa-2x"></i> */}
                         <input type="date" placeholder="Date" />
                        <br />
                        <button>Book</button>
                      </form>
                </div>
                  )
                }
          </Popup>
        </div>
        <div>
    </div>
      </div>
    </>
  )
}

export default Hero;
import React, {useState } from 'react';
import '../../styles/hero.css';

import BookForm from '../form/BookForm';

function Hero (props) {
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
        </div>
        <div>
    </div>
      </div>
    </>
  )
}

export default Hero;
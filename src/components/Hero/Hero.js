import React from 'react';
import '../../styles/hero.css';
import Header from '../header/Header';

function Hero  () {
  return (
    <div className="hero">
      <Header />
      <img
        alt="HeroImg"
        className="bgImg"
        src="https://img.freepik.com/premium-photo/mother-newborn-child-birth-maternity-hospital-mom-hugging-her-newborn-baby-after-delivery_494619-222.jpg"
      />
    </div>
  )
}

export default Hero;
import React from 'react';
import videoBg from "../../assets/video/videoBg.mp4";
import './landing.css';
import '../../styles/hero.css';

function Landing (props) {
  return (
    <>
    <div className={props.cName}>
        <div className="overlay"></div>
        <video
            className="bgImg"
            src={props.videoBg}
            autoPlay
            loop
            muted
        />
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a
                href={props.url}
                className={props.btnClass}
                // {props.buttonText}
            >
            </a>
        </div>
    </div>
    </>
  )
}

export default Landing;

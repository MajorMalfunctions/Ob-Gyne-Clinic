import React, { useState } from "react";
import "../../styles/services.css";

function ServicesData(props) {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab =(index) => {
         setToggleState(index);
    }
    
    return (
        <div className="services-card">
            <div className="image-container">
                <img src={props.image} alt="image" />
                <h2 class="centered">{props.heading}
                </h2>
                <span
                onClick={() => toggleTab(1)}
                >View More
                <i className="uil uil-arrow-right services__button-icon">
                </i>
                </span>
            </div>
            <p> {props.text} </p>
        </div>
    )
}

export default ServicesData;
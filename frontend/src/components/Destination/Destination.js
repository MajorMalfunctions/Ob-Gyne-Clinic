import React from 'react';
import '../../styles/destination.css';

import Baby5 from "../../assets/images/baby5.jpg";
import Baby6 from "../../assets/images/baby6.jpg";
import Baby7 from "../../assets/images/baby7.jpg";
import Baby8 from "../../assets/images/baby8.jpg";

import DestinationData from './DestinationData';

const Destination = () => {
  return (
    <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity</p>

        <DestinationData
            className="first-des"
            heading="Taal Volcano, Batangas"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also"
            img2={Baby5}
            img1={Baby6}
        />

        <DestinationData
            className="first-des-reverse"
            heading="Mt.Daguldul, Batangas"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also"
            img2={Baby7}
            img1={Baby8}
        />
    </div>
  )
}

export default Destination;
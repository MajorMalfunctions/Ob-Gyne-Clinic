import React from 'react'
import '../../styles/destination.css';

import DestinationData from './DestinationData';

import Baby1 from "../../assets/images/baby1.jpg";
import Baby2 from "../../assets/images/baby2.jpg";
import Baby3 from "../../assets/images/baby3.jpeg";
import Baby4 from "../../assets/images/baby4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Works</h1>
      <p>Tours Give you opportunity to see a lot,
        within  a time frame.
      </p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby1}
        img2={Baby2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Taal Volcano, Batangas"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby3}
        img2={Baby4}
      />
      {/* <DestinationData
        className="first-des-reverse"
        heading="Taal Volcano, Batangas"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img3={Baby3}
        img4={Baby4}
      /> */}
    </div>
  );
};

export default Destination;
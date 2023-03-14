import React from 'react'

import ExperienceData from './ExperienceData';

import Baby1 from "../../assets/images/baby1.jpg";
import Baby2 from "../../assets/images/baby2.jpg";
import Baby3 from "../../assets/images/baby3.jpeg";
import Baby4 from "../../assets/images/baby4.jpg";
import Baby9 from "../../assets/images/baby9.jpg";
import Baby10 from "../../assets/images/baby10.jpg";


const Experience = () => {
  return (
    <div className="experience">
      <h1>Healthcare Services</h1>
      <p>Tours Give you opportunity to see a lot,
        within  a time frame.
      </p>
      <ExperienceData
        className="first-exp"
        heading="Gynecological Care"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby1}
        img2={Baby2}
      />

      <ExperienceData
        className="first-exp-reverse"
        heading="Prenatal Obstetrical Care"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby3}
        img2={Baby4}
      />

      <ExperienceData
        className="first-exp"
        heading="Surgical Services"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby1}
        img2={Baby2}
      />

      <ExperienceData
        className="first-exp-reverse"
        heading="Advanced Laparoscopic Surgery"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby3}
        img2={Baby4}
      />

      <ExperienceData
        className="first-exp"
        heading="Vaginal Hysterectomy"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby1}
        img2={Baby2}
      />

      <ExperienceData
        className="first-exp-reverse"
        heading="Perimenopause & Menopause"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby3}
        img2={Baby4}
      />

      <ExperienceData
        className="first-exp"
        heading="Normal & High Risk Obstetrics"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby3}
        img2={Baby4}
      />

      <ExperienceData
        className="first-exp-reverse"
        heading="3D Mammography"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also"
        img1={Baby3}
        img2={Baby4}
      />

    </div>
  );
};

export default Experience;
import React from 'react'
import "../../styles/footer.css";

import ace from '../../assets/icons/ace.png';
import rtr from '../../assets/icons/RTR.png';
import shalom from '../../assets/icons/shalom.jpg';
import mmh from '../../assets/icons/mmh.png';

import Foot from  './Foot';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top-desc">
          <h1>Clinica Baltazar</h1>
          <p>Center For Womens Health</p>
            Email Me:<a href="mailto:palmerabaltazar@yahoo.com">{' '}Palmera Baltazar</a>
        </div>

        <div>
          <a href="https://www.facebook.com/profile.php?id=100089818255354">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
          <a  href="https://www.linkedin.com/in/palmera-baltazar-25133bb8/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.22398395185!2d125.00188575075424!3d11.244926891965452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330870d196766547%3A0xaa76e70c06d2bee1!2sCLINICA%20BALTAZAR%20CENTER%20FOR%20WOMEN&#39;S%20HEALTH!5e0!3m2!1sen!2sph!4v1677300444838!5m2!1sen!2sph" 
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </>

      <div className="bottom">
        <div>
          <h4>Location</h4>
          <p>Justice Romualdez St </p>
          <p>Tacloban City, 6500 Leyte</p>
          <a href="/">Rm 9 Maternity Compound </a>
          <a href="/">In  front Tacloban Plaza Hotel</a>
          <a href="/">Smart:  0961-240-5300 </a>
          <a href="/">Globe:  0906-261-3328 </a>
          <a href="/">Tel:  327-8730 </a>
          <a href="/">Tel:  321-0524 </a>
        </div>

        <div>
          <h4>Services Offered:</h4>
          <p>Annual Gynecological Checkup</p>
          <p>Cervical Cancer Screening (PAP SMEAR)</p>
          <p>Clinical Breast Examination</p>
          <p>Family Planning And Counseling</p>
          <p>Immunization For Women</p>
          <p>(Flu, Tetanus, Toxoid/Tdap, Cervical Cancer Prevention)</p>
          <p>Major/Minor Surgical Procedures</p>
          <p>Ob-Gyne Clearance</p>
          <p>Pre & Post Operative Evaluation and Care</p>
        </div>

        <div>
          <h4>Affiliations:</h4>
            <a href="https://www.facebook.com/acemc.tac/">
              Ace Medical Center
              {' '}
              <img
                className="logo"
                src={ace}
                alt="ace hospital"
              />
            </a>

              <a href="https://www.facebook.com/profile.php?id=180050515382780&paipv=0&eav=AfYLLOpBHX_UPc3OHYeSQCuYltxD0Hqcy5mngcoKE6iMMVXDUj1Wjg9N5J8anUWO2aA&_rdr">
                Mother Of Mercy Hospital
                <img
                  className="logo"
                  src={mmh}
                  alt="mmh hospital"
                />
              </a>

              <a href="https://www.facebook.com/people/Remedios-Trinidad-Romualdez-Medical-Foundation/100063613819397/">
                RTR Hospital
                <img
                  className="logo"
                  src={rtr}
                  alt="rtr hospital"
                />
              </a>

               <a href="https://www.facebook.com/people/United-Shalom-Hospital-Tacloban/100075692094823/">
                  United Shalom Hospital
                  <img
                    className="logo"
                    src={shalom}
                    alt="united shalom hospital"
                  />
              </a>
        </div>

        <div>
          <h4>Clinic Hours:</h4>
          <p>Monday: 10 AM - 04 PM</p>
          <p>Tuesday: 10 AM - 04 PM</p>
          <p>Wednesday: 10 AM - 04 PM</p>
          <p>Thursday: 10 AM - 04 PM</p>
          <p>Friday: 10 AM - 04 PM</p>
          <p>Saturday: 10 AM - 04 PM</p>
          <p>Sunday: Closed </p>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms Of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
          <a href="/">Troubleshooting</a>
        </div>
      </div>
      <Foot />
    </div>
  )
}

export default Footer

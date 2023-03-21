import React from 'react'
import "../../styles/footer.css";

import ace from '../../assets/icons/ace.png';
import rtr from '../../assets/icons/RTR.png';
import shalom from '../../assets/icons/shalom.jpg';
import mmh from '../../assets/icons/mmh.png';

import { Link } from  "react-router-dom";

import { RiSkypeFill, RiServiceFill, RiCustomerService2Fill, RiBuilding4Fill, RiCellphoneFill, RiSmartphoneFill, RiBuilding4Line, RiLinkedinBoxFill, RiInstagramFill, RiTelegramFill, RiFacebookCircleFill, RiWhatsappFill, RiWechat2Fill, RiTwitterFill} from "react-icons/ri"
import { GiRotaryPhone, GiHelp, GiBookCover, GiSecurityGate, GiTerror, GiSmartphone, GiPositionMarker } from "react-icons/gi";

// import Foot from  './Foot';
// import ScrollUp from '../ScrollUp/ScrollUp';

const Footer = () => {
  const fontStyles = {color: '#2a2a2a', fontSize: '24px'};
  
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="top-desc">
            <h1>Clinica Baltazar</h1>
            <p>Center For Womens Health</p>
              Email Me:<a href="mailto:palmerabaltazar@yahoo.com">{' '}Palmera Baltazar</a>
          </div>

          <div className="social_icons">
              
              <span className="circleClasses">
                  <RiFacebookCircleFill id="" className="iconStyles icon1" />
              </span>
              
              <span className="circleClasses">
                  <RiTwitterFill id="" className="iconStyles icon2" />
              </span>
              
              <span className="circleClasses">
                  <RiWhatsappFill id="" className="iconStyles icon3" />
              </span>
              
              <span className="circleClasses">
                  <RiTelegramFill id="" className="iconStyles icon4" />
              </span>
              
              <span className="circleClasses">
                  <RiSkypeFill id="" className="iconStyles icon5" />
              </span>
              
              <span className="circleClasses">
                  <RiWechat2Fill id="" className="iconStyles icon6" />
              </span>

              <span className="circleClasses">
                  <RiLinkedinBoxFill id="" className="iconStyles icon7" />
              </span>

              <span className="circleClasses">
                <RiInstagramFill id="" className="iconStyles icon8" />
              </span>

            {/* <a  href="https://www.linkedin.com/in/palmera-baltazar-25133bb8/">
              <i className="fa-brands fa-linkedin"></i>
            </a> */}
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
            <>
              <ul>
                  <h6>Clinic Location:</h6>
                  <li><GiPositionMarker style={fontStyles} />Justice Romualdez St, Tacloban City, 6500 Leyte </li>
                  <li><RiBuilding4Fill  style={fontStyles} />Rm 9 Maternity Compound (In front Tacloban Plaza Hotel)</li>
                  <li><RiSmartphoneFill style={fontStyles} />Smart:  0961-240-5300 </li>
                  <li><RiCellphoneFill style={fontStyles} />Globe:  0906-261-3328 </li>
                  <li><GiRotaryPhone style={fontStyles} />Tel:  327-8730 </li>
                  <li><GiRotaryPhone style={fontStyles} />Tel:  321-0524 </li>
              </ul>
          </>

          <div>
            <h6>Services Offered:</h6>
            <ol type="i">
              <li><RiServiceFill style={fontStyles} />Annual Gynecological Checkup</li>
              <li><RiServiceFill style={fontStyles} />Cervical Cancer Screening (PAP SMEAR)</li>
              <li><RiServiceFill style={fontStyles} />Clinical Breast Examination</li>
              <li><RiServiceFill style={fontStyles} />Family Planning And Counseling</li>
              <li><RiServiceFill style={fontStyles} />Immunization For Women</li>
              <li><RiServiceFill style={fontStyles} />(Flu, Tetanus, Toxoid/Tdap, Cervical Cancer Prevention)</li>
              <li><RiServiceFill style={fontStyles} />Major/Minor Surgical Procedures</li>
              <li><RiServiceFill style={fontStyles} />Ob-Gyne Clearance</li>
              <li><RiServiceFill style={fontStyles} />Pre & Post Operative Evaluation and Care</li>
            </ol>
          </div>

          {/* <div className="affiliations">
              <a href="https://www.facebook.com/acemc.tac/">
                <img
                  className="logo"
                  src={ace}
                  alt="ace hospital"
                />
              </a>

                <a href="https://www.facebook.com/profile.php?id=180050515382780&paipv=0&eav=AfYLLOpBHX_UPc3OHYeSQCuYltxD0Hqcy5mngcoKE6iMMVXDUj1Wjg9N5J8anUWO2aA&_rdr">
                  <img
                    className="logo"
                    src={mmh}
                    alt="mmh hospital"
                  />
                </a>

                <a href="https://www.facebook.com/people/Remedios-Trinidad-Romualdez-Medical-Foundation/100063613819397/">
                  <img
                    className="logo"
                    src={rtr}
                    alt="rtr hospital"
                  />
                </a>

                  <a href="https://www.facebook.com/people/United-Shalom-Hospital-Tacloban/100075692094823/">
                    <img
                      className="logos"
                      src={shalom}
                      alt="united shalom hospital"
                    />
                </a>
          </div> */}

          <div>
            <h6>Others</h6>
            <ul>
            {/* <li><a href="#/home">Home</a></li> */}
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
              <li>License</li>
              <li>Troubleshooting</li>
            <li>Terms Of Service</li>
              <li>Privacy Policy</li>
              <li>License</li>
              <li>Troubleshooting</li>
            </ul>
          </div>

          {/* <div>
            <h6>Hospital Affiliations:</h6>
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
          </div> */}


          <div>
            <h6>Clinic Hours:</h6>
            <ul>
              <li>Monday:</li>
              <ul>
                <dd>10:00 AM - 04:00 PM </dd>
              </ul>
              <li>Tuesday:</li>
              <ul>
                <dd>10:00 AM - 04:00 PM </dd>
              </ul>
              <li>Wednesday:</li>
              <ul>
                <dd>10:00 AM - 04:00 PM </dd>
              </ul>
              <li>Thursday:</li>
              <ul>
                <dd>10:00 AM - 04:00 PM </dd>
              </ul>
              <li>Friday:</li>
              <ul>
                <dd>10:00 AM - 04:00 PM </dd>
              </ul>
              <dt>Saturday:</dt>
              <dt>Sunday:</dt>
                <ul>
                  <dt>
                    <dd>CLOSE!</dd>
                  </dt>
                </ul>
            </ul>
          </div>

          <div>
            <h6>Help & Support <GiHelp /></h6>
            <ul>
              <li><RiCustomerService2Fill />Online Consultation</li>
              <li><GiBookCover />Book Online</li>
              <li><GiSecurityGate />License</li>
              <li><GiTerror />Troubleshooting</li>
            </ul>
          </div>
        </div>
      </div>
        <p className="foot_foot">© 2023 Bugtech Developers | <Link className="fooText" to="/https://www.facebook.com/thebullier"> Jezedevkiel Portfolio </Link></p>
      {/* <ScrollUp /> */}
    </>
  )
}

export default Footer

import React from 'react'
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Clinica Baltazar</h1>
          <p>Center For Womens Health</p>
          <p>Copyright ©2023 Community Women and Maternal Care.</p>
        </div>
        <div>
          <a  href="/">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
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
          <a href="/">Justice Romualdez St, Downtown, Tacloban City, 6500 Leyte</a>
          <a href="/">Rm 9 Maternity Compound </a>
          <a href="/">Infront Tacloban Plaza Hotel</a>
          <a href="/">Smart:  0961 240  5300 </a>
          <a href="/">Globe:  0906  261 3328 </a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">POGS</a>
          <a href="/">Tacloban OB-Gyne</a>
          <a href="/">Philippine Doctors Association</a>
          <a href="/">OB2PEDI</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
          <a href="/">Consultation</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms Of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
          <a href="/">Troubleshooting</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Clinica Baltazar</h1>
          <p>Csadlkasjhdalksiodhiasohdaioshdasoihdasiohdasiohdiaosdhioashdias</p>
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

      <div className="bottom">
        <div>
          <h4>Achievements</h4>
          <a href="/">Achievement1</a>
          <a href="/">Achievement2</a>
          <a href="/">Achievement3</a>
          <a href="/">Achievement4</a>
        </div>

        <div>
          <h4>Schedule</h4>
          <a href="/">Schedule1</a>
          <a href="/">Schedule2</a>
          <a href="/">Schedule3</a>
          <a href="/">Schedule4</a>
        </div>

        <div>
          <h4>Hours</h4>
          <a href="/">Hours1</a>
          <a href="/">Hours2</a>
          <a href="/">Hours3</a>
          <a href="/">Hours4</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

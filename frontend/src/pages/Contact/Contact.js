import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../styles/contact.css";

import { MdEmail, MdSmartphone, MdLocationPin } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_mhxhh3o",
          "template_34gbuhm",
          form.current,
          'K8EeZRf2xpsTZdcrN'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
    };


    return(
        <div className="contact_container">
          <div className="contact_box">
              <div className="box_container">
                <p>Phone</p>
                <MdSmartphone
                  style={{
                    fontSize: '40px',
                    fill: 'orchid'
                  }}
                
                />
                <span>+639 12121238 321123</span>
              </div>

              <div className="box_container">
                <p>Email</p>
                <MdEmail style={{ fontSize: '80px',  color: 'orchid' }} />
                <span>jezedevkiel21@gmail.com</span>
              </div>
  
              <div className="box_container">
                <p>Address</p>
                {/* <MdLocationPin size="25" color="orchid" style={{ fill: 'black'}} /> */}
                <MdLocationPin size="45" color="orchid" style={{ height: "60px", width: "45px"}} />
                <span>Brgy.51-A Arellano St.</span>
              </div>
            </div>

          <div className="contact_body">
              <form ref={form} onSubmit={sendEmail} className="form_container">
                <h1>Get in Touch!</h1>
                <div className="group_form">
                  <input
                    type="text"
                    placeholder="Fullname"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="group_forms">
                  <textarea
                    placeholder="Write Message"
                  />
                </div>
              <div className="button_wrapper">
                <button className="contact_button">

                Submit{" "} {" "}
                  <RiMailSendLine
                    color="#fff"
                    size="20px"
                    className="submit-icon"
                  />
                </button>
              </div>
              </form>
          </div>
        </div>
    )
}

export default Contact;
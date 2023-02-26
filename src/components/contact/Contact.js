import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../styles/contact.css";

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
        <div className="form-container">
            <h1>Send Me A Message!</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows="4"></textarea>
                <button type="submit" onSubmit={sendEmail}>Send</button>
            </form>
        </div>
    )
}

export default Contact;
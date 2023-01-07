import React from "react";
import "./Contact.css";

import { useRef } from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  // ref for form
  const form = useRef();
  // toastify
  const notify = () => {
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    if (name && email && message) {
      toast.success(
        "Thank you for dropping a message. I will respond shortly",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  // handle form submit
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_uxiptzi",
      "template_40dgr72",
      form.current,
      "1GdxqHYFSpgL2xF37"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <FaMailBulk className="contact-option-icon" />
            <h4>Email</h4>
            {/* <h5>anazawilliam1@gmail.com</h5> */}
            <a href="mailto:anazawilliam1@gmail.com">Send a message</a>
          </article>
          <article className="contact-option">
            <BsTwitter className="contact-option-icon" />
            <h4>Twitter</h4>
            {/* <h5>@th_ejouRney</h5> */}
            <a href="https://twitter.com/th_ejouRney">Follow me</a>
          </article>
          <article className="contact-option">
            <FaWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+2349124295757">
              WhatsApp me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="name"
            placeholder="Jane Doe"
            required
          />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="email@email.com"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Good news!"
            className="message"
            required
          ></textarea>
          <button type="submit" onClick={notify} className="btn btn-primary">
            Send Message
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;

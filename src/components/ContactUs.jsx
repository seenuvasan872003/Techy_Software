// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [service, setService] = useState("");
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      companyName,
      service,
      business,
      location,
      phone,
      message,
    };

    // Using Axios to send the POST request
    axios.post("http://localhost:5000/api/contact/submit", contactData)
      .then((response) => {
        console.log("Success:", response.data);
        // You can add code here to handle success, like showing a message to the user
        alert("successsfull Send the Message")
         // Clear the form fields
         setName("");
         setEmail("");
         setCompanyName("");
         setService("Website Development"); // Reset to default value
         setBusiness("");
         setLocation("");
         setPhone("");
         setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error accordingly
      });
  };

  return (
    <>
      <section className="contact-us">
        <div className="cont-img">
          <div className="container">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>/</li>
            <li>Contact</li>
          </ol>
        </div>
      </section>
      <div className="container">
        <section className="contact-map">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="317"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=villupuram&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="contact-detial">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt">
                    <CiLocationOn />
                  </i>
                  <h4>Head Office:</h4>
                  <p>
                    <a className="no_color">
                      845 Third Avenue, Suite 630, 6th Floor New York, NY 10022
                    </a>
                  </p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope">
                    <CiMail />
                  </i>
                  <h4>Email:</h4>
                  <p>
                    <a
                      className="no_color"
                      href="mailto:seenuifo.2003@gmail.com"
                    >
                      seenuifo.2003@gmail.com
                    </a>
                  </p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone">
                    <IoPhonePortraitOutline />
                  </i>
                  <h4>Call:</h4>
                  <p>
                    <a className="no_color" href="tel:+919342238388">
                      9342238388
                    </a>
                  </p>
                </div>
                <div className="whatapp">
                  <i className="bi bi-phone">
                    <FaWhatsapp />
                  </i>
                  <h4>Whatsapp:</h4>
                  <p>
                    <a className="no_color" href="https://wa.me/+919342238388">
                      9342238388
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0 contact-form">
              <form
                role="form"
                className="contact-detial-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 form-group mt-3">
                    <input
                      type="text"
                      className="form-control "
                      name="companyName"
                      id="companyName"
                      placeholder="Company name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <label className="lab-service col-md-2 form-group">
                    Services:
                  </label>
                  <select
                    id="select-domain"
                    className="col-md-4 form-group mt-3 mt-md-0"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Website Maintenance">
                      Website Maintenance
                    </option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Domain & Hosting">Domain & Hosting</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="business"
                    id="business"
                    placeholder="Which Business do you have?"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    id="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Phone No"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div id="scroll_div" className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    id="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="text-center pt-5">
                  <button type="submit" id="contactButton">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;

// import React from 'react';
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import '../styles/index.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className='foooter-container'>

        <div className='row'>

          <div className='softTech col-lg-3 col-md-6 footer-info'>
  <h3>Soft Tech Group, Inc.</h3>
  <p>Soft Tech Group Inc. is a unique blend of service delivery andproduct innovation providing its clients with next generationbusiness solutions through the use of integrated informationtechnology products and services.</p>
          </div>
          <div className='UsefulLinks col-lg-3 col-md-6 footer-links'>
            <h4>Useful Links</h4>
             <ul className="mt-2">
               <li><a href="">Home</a></li>
               <li><a href="">Services</a></li>
               <li><a href="">About</a></li>
               <li><a href="">Contact</a></li>
               <li><a href="">Privacy Policy</a></li>
              </ul>
          </div>
          <div className='ContactUs col-lg-3 col-md-6 footer-contact'>
            <h4>Contact Us</h4>
            <p >
              845 Third Avenue, Suite 630,6th Floor
              <br/>
              New York, NY 10022
              <br/>
              <strong>Phone:</strong>
              +91 9342238388,
              <br/>
              <strong>Email:</strong>
              seenuifo.2003@gmail.com
              <br />                  
            </p>
            <div className='social-links mt-3'>
              <a href="mailto:seenuifo.2003@gmail.com"><GoMail /></a>
              <a href="https://www.linkedin.com/in/seenu-vasan-s-a1a402234/"><CiLinkedin /></a>
              <a href="https://wa.me/+919342238388"><FaWhatsapp /></a>
              <a href="https://github.com/seenuvasan872003"><LuGithub /></a>
            </div>
          </div>
          <div className='OurNewsletter col-lg-3 col-md-6 footer-newsletter'>
            <h4>Our Newsletter</h4>
            <p className='mt-2'>
            Stay up-to-date on the latest technology news and trends with our curated industry news roundup. From Software Development to Artificial Intelligence, we ve got you covered.
            </p>
            <img  src="https://www.softtechgroup.us/img/clutch-logo.jpg"></img>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

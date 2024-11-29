// import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';


const Services = () => {
  return (
    <>
    
    <section className='services'>
      <div className='services-bg'>
          <div className='container'>
            <h1>Services</h1>
          </div>
      </div>
      <div className="container">
          <ol>
            <li> <Link to="/">Home</Link> </li>
            <li>/</li>
            <li>Contact</li>
          </ol>
      </div>
    </section>
    <section className="Services-info">
      <h2>Our Services</h2>
      <div>
      <p>Comprehensive Website Services to Ignite Your Online Success. Empower <br />
        Your Business with Powerful Online Services from our Website.</p>
      </div>
    </section>
    <section className='services-give'>
      <div className='container'>
        <div className='row'>
          <div id='services-card' className=" card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEjBilP-PBEbL7NAsVh5jU2PEYPgaGhh8-g&s" alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Website Development</h2>
              <p>We create modern, responsive websites tailored to your business needs.</p>
              <div className="card-actions">
                <button className="btn btn-primary"><Link to="/contact">Contact Now</Link></button>
              </div>
            </div>
          </div>
          <div id='services-card' className=" card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://www.ssl2buy.com/wp-content/uploads/2022/04/mobile-application-security.jpg" alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">App Development</h2>
              <p>We develop custom mobile and web applications to drive business growth.</p>
              <div className="card-actions">
                <button className="btn btn-primary"><Link to="/contact">Contact Now</Link></button>
              </div>
            </div>
          </div>
          <div id='services-card' className=" card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://www.creativeitinstitute.com/images/course/course_1662724358.jpg" alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Digital Marketing</h2>
              <p>Boost your online presence with our targeted digital marketing strategies.</p>
              <div className="card-actions">
                <button className="btn btn-primary"><Link to="/contact">Contact Now</Link></button>
              </div>
            </div>
          </div>
          <div id='services-card' className=" card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://wickedmodernwebsites.com/wp-content/uploads/2022/11/Website-Maintenance-Service.jpg" alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Website Maintenance</h2>
              <p>Ensure smooth operation with our reliable website maintenance services.</p>
              <div className="card-actions">
                <button className="btn btn-primary"><Link to="/contact">Contact Now</Link></button>
              </div>
            </div>
          </div>
          <div id='services-card' className=" card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://miro.medium.com/v2/resize:fit:1400/1*mdUo43LfieecHQRlnHJRkA.jpeg" alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Graphic Design</h2>
              <p>Our team designs captivating graphics that effectively communicate your brand.</p>
              <div className="card-actions">
                <button className="btn btn-primary"><Link to="/contact">Contact Now</Link></button>
              </div>
            </div>
          </div>
          <div id='services-card' className=" card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://www.altusquantum.com/assets/img/DM/domain_hosting.jpg" alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Domain & Hosting</h2>
              <p>We offer domain and hosting services to keep your website online and secure.</p>
              <div className="card-actions">
                <button className="btn btn-primary"><Link to="/contact">Contact Now</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;

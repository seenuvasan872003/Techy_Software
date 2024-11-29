// import React from 'react';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import SlidingCard from '../components/SliderCard';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const AboutUs = () => {
  return (
    <>
      <section className="about-us mb-5">
        <div className='about-img'>
          <div className='container'>
            <h1>About</h1>
          </div>
        </div>
        <div className='container'>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>/</li>
            <li>About</li>
          </ol>
        </div>
      </section>
      <section className='about-clint mb-5'>
        <div className='container'>
          <div id="row-clint" className="row justify-content-evenly mb-5 about-no">
            <div className='about-clint-img col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch'>
              <img src="https://kahlawyers.com/wp-content/uploads/2019/08/icons-conveyancing-02.svg" alt="smiley" height={48} width={48} />
              <div className='about-clint-contant'>
                <h1>250</h1>
                <p>Happy Clients</p>
             </div>
            </div>
            <div className='about-clint-img col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch'>
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQwaWU4Jb4xGru8NQbT5cEtqa8BLJE2CxRakKQggAukJm-E5zDR" alt="" height={48} width={48}/>
              <div className='about-clint-contant'>
                <h1>400</h1>
                <p>Projects</p>
              </div>
            </div>
            <div className='about-clint-img col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDII85htR-_W4uDVcwuzIWdWMqPTP9pL1GRS-d5zz3d8TkYaet" alt="" height={48} width={48}/>
              <div className='about-clint-contant'>
                <h1>15</h1>
                <p>Years of experience</p>
              </div>
            </div>
            <div className='about-clint-img col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZM2qdk9563YEbl66YBGNtMt9OHeK-qrMdNYwzvLqdh2QS6X8U" alt="" height={50} width={50}/>
              <div className='about-clint-contant'>
                <h1>5</h1>
                <p>Awards</p>
              </div>
            </div>
          </div>
          <div className='row mt-5'> 
            <div className='col-lg-6 video-box align-self-baseline '>
            <img src="https://www.softtechgroup.us/theme/img/vision.png" className="img-fluid"/>
            </div>
            <div className='col-lg-6 pt-3 pt-lg-0 content'>

              <div>
                <h3>Our Visio</h3>
                <p className="pt-2 text-justify">
                At Soft Tech Group, Inc., we strive to lead in the inception,
                design and development of most advanced business solutions,
                including Software development, Enterprise Applications, Integrations,
                Web, Mobility and E-commerce.
                </p>
              </div>

              <div className="pt-5">
                <h3>Our Mission</h3>
                <p className="pt-2 text-justify">
                  Soft Tech Group, Inc. is an IT Services Company, whose mission is to enable every business
                  to achieve excellence in what it does through implementing the right business solutions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className='about-work-process'>
        <div className='container'>
          <div className='section-title'>
            <p>Utilizing agile methodology for solution delivery, we deliver industry vertical based solutions positively impacting our clients’ ROI! We aim to target specific business and technology trends through our industry knowledge, our technology capabilities and our expertise in service offerings.</p>
          </div>
          <div className='row content'>
            <div className="col-md-5 ">
              <img src="https://www.softtechgroup.us/theme/img/why.png" className="img-fluid" alt=""/>
            </div>
            <div className="col-md-7 pt-4 pb-2">
              <h3 className="mb-5">
                Why Soft Tech
              </h3>
             
              <ul className="mt-5">
                <li>
                  <IoCheckmarkDoneOutline/>  Dedicated Teams
                </li>
                <li>
                  <IoCheckmarkDoneOutline/>  Efficient Execution
                </li>
                <li>
                  <IoCheckmarkDoneOutline/>  Creation &amp; Innovation
                </li>
                <li>
                 <IoCheckmarkDoneOutline/>  Research &amp; Analysis
                </li>
                <li>
                 <IoCheckmarkDoneOutline/>  Fast Communication
                </li>
                <li>
                  <IoCheckmarkDoneOutline/>  Ease of Work
                </li>
              </ul>
            </div>
          </div>
          <div className='row content'>
            <div className="col-md-5 order-1 order-md-2 pb-5">
              <img src="https://www.softtechgroup.us/theme/img/our-core-value1.png" className="img-fluid" alt=""/>
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3 className="mb-5">Our Core Values
              </h3>
              <p className="mb-5 mt-5">
                Soft Tech Group believes in a set of values that help govern the functions of the company and our talented employees. It gives us a common goal and direction to work towards and define parameters acceptable to everyone who work for Soft Tech Group.
              </p>
              <ul className="mt-5">
                <li>
                 <IoCheckmarkDoneOutline/>  Integrity &amp; Commitment

                </li>
                <li>
                 <IoCheckmarkDoneOutline/>  Innovation

                </li>
                <li>
                 <IoCheckmarkDoneOutline/>  Customer Focus

                </li>
                <li>
                 <IoCheckmarkDoneOutline/>  Respect &amp; Teamwork

                </li>
                <li>
                 <IoCheckmarkDoneOutline/>  Above &amp; Beyond
                </li>
               
              </ul>
            </div>
          </div>
          <div className='row content'>
            <div className="col-md-5 pb-4">
              <img src="https://www.softtechgroup.us/theme/img/root-us.png" className="img-fluid" alt=""/>
            </div>
            <div className="col-md-7 pt-5">
              <h3 className="mb-5">
              Our New York City Journey
              </h3>
              <ul className="mt-5">
                <li>
                 <IoCheckmarkDoneOutline/>  Soft Tech Group s New York base has expanded over the years by catering to a greater number of NYC businesses.
                </li>
                <li>
                 <IoCheckmarkDoneOutline/>  New York City brings its own competition, and businesses thrive in a competitive environment.
                </li>
                <li>
                 <IoCheckmarkDoneOutline/>  Soft Tech Group Inc.s journey began in Manhattan and has continued to expand ever since.
                </li>
                <li>
                 <IoCheckmarkDoneOutline/>  Soft Tech Group Inc., a New York City technology company, takes pride in serving clients.
                </li>
            </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ClientsSay ">
        <SlidingCard />
      </section>
      <section className="Recognitions">
        <div className="container">
          <div className="section-title">
            <h2>Recognitions</h2>
          </div>
          <div className="section-img">
            <div className="row justify-content-evenly mb-5 ">
              <div className="col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch ">
                <img src="https://www.softtechgroup.us/theme/img/top-software-development-companies.png" alt="" height={180} width={180} />
              </div>
              <div className="col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch">
                <img src="https://www.softtechgroup.us/theme/img/badge-top-app-company-new-york.png" alt=""  height={180} width={180}/>
              </div>
              <div className="col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch">
                <img src="https://www.softtechgroup.us/theme/img/IT_Services_Firms_2020.png" alt=""  height={180} width={180}/>
              </div>
              <div className="col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch">
                <img src="https://www.softtechgroup.us/theme/img/Badge_Colored_Web.png" alt=""  height={180} width={180}/>
              </div>
              <div className="col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch">
                <img src="https://www.softtechgroup.us/theme/img/Custom-Software-Development-Companies.png" alt=""  height={180} width={180}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

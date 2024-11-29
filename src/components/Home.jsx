
import '../styles/index.css';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import SlidingCard from '../components/SliderCard';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
  <>
    <section className="home">
      <h1>Welcome to Techy Software</h1>
      <p>Your one-stop solution for innovative software solutions.</p>
      <Link to="/contact">LET,S TALK</Link>
    </section>
    <div className="showMy-about">

      <div className='showmy-clint'>
      <div className="row justify-content-evenly">
        <div className='col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch'>
          <img src="https://kahlawyers.com/wp-content/uploads/2019/08/icons-conveyancing-02.svg" alt="smiley" height={48} width={48} />
          <div>
           <h1>250</h1>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch'>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQwaWU4Jb4xGru8NQbT5cEtqa8BLJE2CxRakKQggAukJm-E5zDR" alt="" height={48} width={48}/>
          <div>
            <h1>400</h1>
            <p>Projects</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDII85htR-_W4uDVcwuzIWdWMqPTP9pL1GRS-d5zz3d8TkYaet" alt="" height={48} width={48}/>
          <div>
            <h1>15</h1>
            <p>Years of experience</p>
          </div>
        </div>
        <div className='col-lg-3 col-md-5 col-xs-12 col-6 d-md-flex align-items-md-stretch'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZM2qdk9563YEbl66YBGNtMt9OHeK-qrMdNYwzvLqdh2QS6X8U" alt="" height={50} width={50}/>
          <div>
            <h1>5</h1>
            <p>Awards</p>
          </div>
        </div>
      </div>
      </div>

      <div className='row'>

        <div className='col-lg-6 video-box align-self-baseline'>
          <img src="https://www.softtechgroup.us/theme/img/services.png" className="img-fluid" alt=""/>  
        </div>
        <div className='col-lg-6 pt-3 pt-lg-0 content text-justify'>
          <h3>Soft Tech Group Inc. A Leader in Tech Solutions</h3>
          <p className="text-justify pharaabout">At Soft Tech Group, we recognize that each business has distinct IT requirements. Thats why we invest time in understanding your specific needs to tailor our solutions accordingly. 
          This approach guarantees that you receive personalized IT solutions that align with your objectives, helping you succeed.</p>
          <p className='text-justify pb-2'>
            <b>What Sets Us Apart</b>
          </p>
          <ul>
            <li><IoCheckmarkDoneOutline/> Bespoke solution design and implementation</li>
            <li><IoCheckmarkDoneOutline/> Seasoned professionals</li>
            <li><IoCheckmarkDoneOutline/> 24/7 Support Services</li>
            <li><IoCheckmarkDoneOutline/> Rich Industry experience</li>
            <li><IoCheckmarkDoneOutline/> 500 Fortune Clientele</li>
          </ul>
          <p className='text-justify'> 
          Our goal is to help your business streamline its work flow by implementing cost effective technology solutions that ensure a better ROI.
          With our assistance, you can enhance your performance, simplify workflows, and achieve superior outcomes. </p>
        </div>

      </div>

    </div>
    <section className='Bring-Innovation'>
      <div className="brinf-cont">
          <h3>Lets Bring Innovation To Your Business!</h3>
          <p>Ready to take your business to the next level? Speak with our experienced consultants today to learn how we can help you innovate and succeed. Click below to schedule a consultation.</p>
          <Link to="/contact">Schedule Now</Link>
      </div>
    </section>
    <section className='services'>
      <div className='container'>
        <div className='text-center'>
          <h2>How We Can Help Your Business</h2>
          <p>Our organization offers a wide range of technology solutions for businesses of all sizes</p>
        </div>
        <div className='row'>
          <div className="col-md-6">
              <div className="d-flex icon-box mob-height-1"  id="health">
                <div className="icon">
                  <img src="https://www.softtechgroup.us/theme/img/home/services/healthcare-it.png" alt="healthcare technology"/>
                </div>
                <div>
                  <h4 className="title">Healthcare IT</h4>
                  <p className="description">
                  
                    Our team of IT consultants has expertise in designing data solutions and healthcare systems.
                    As a prominent provider of Health IT services, we are primarily concerned with ... 
                  </p>
                  <button className="read_btn" >Read more</button>
                </div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="d-flex icon-box mob-height-1"  id="health">
                <div className="icon">
                  <img src="https://www.softtechgroup.us/theme/img/home/services/application-development.png" alt="healthcare technology"/>
                </div>
                <div>
                  <h4 className="title">Application Development</h4>
                  <p className="description">
                  
                  We understand the importance of utilizing the latest technology to help businesses succeed. 
                  Thats why we offer personalized IT solutions, ... 
                  </p>
                  <button className="read_btn" >Read more</button>
                </div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="d-flex icon-box mob-height-1"  id="health">
                <div className="icon">
                  <img src="https://www.softtechgroup.us/theme/img/home/services/System-Integration.png " alt="healthcare technology"/>
                </div>
                <div>
                  <h4 className="title">SYSTEM INTEGRATION</h4>
                  <p className="description">
                  
                  Every organization has unique requirements for integrating its solutions and platforms. 
                  We have significant experience with system integration. Our team ... 
                  </p>
                  <button className="read_btn" >Read more</button>
                </div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="d-flex icon-box mob-height-1"  id="health">
                <div className="icon">
                  <img src="https://www.softtechgroup.us/theme/img/home/services/Learning-Management-System.png" alt="healthcare technology"/>
                </div>
                <div>
                  <h4 className="title">Learning Management System</h4>
                  <p className="description">
                  
                  Looking to improve employee training or enhance your institutions learning management system? Our LMS solution is fully ...
                  </p>
                  <button className="read_btn" >Read more</button>
                </div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="d-flex icon-box mob-height-1"  id="health">
                <div className="icon">
                  <img src="https://www.softtechgroup.us/theme/img/home/services/Staff-Augmentation.png" alt="healthcare technology"/>
                </div>
                <div>
                  <h4 className="title">Staff Augmentation</h4>
                  <p className="description">
                  
                  Soft Tech Group helps large enterprises by providing individual professionals and 
                  full We provide staff augmentation services to assist you in meeting your workforce requirements. Our team ... 
                  </p>
                  <button className="read_btn" >Read more</button>
                </div>
              </div>
          </div>
          <div className="col-md-6">
              <div className="d-flex icon-box mob-height-1"  id="health">
                <div className="icon">
                  <img src="https://www.softtechgroup.us/theme/img/home/services/Enterprise-Managed-Services.png" alt="healthcare technology"/>
                </div>
                <div>
                  <h4 className="title">Enterprise Managed Services</h4>
                  <p className="description">
                  
                  We have dealt with Enterprise solutions of all sizes and are able 
                  to provide services for Oracle, Microsoft, SAP, and IBM off-the-shelf products. We provide Managed ...
                  </p>
                  <button className="read_btn" >Read more</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section className='custamer '>
      <SlidingCard />
    </section>

  </>
  );
 
};

export default Home;
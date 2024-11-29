// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/index.css'; // For custom styles

const SlidingCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const testimonials = [
    {
      quote: "Soft Tech Group successfully transformed a complex concept into a user-friendly app. I recently had the opportunity to use a custom app that was developed specifically for me, and I must say, it exceeded my expectations. The app was incredibly user-friendly and had unique features that made it enjoyable to use.",
      author: "Julie Dohan",
      position: "Owner, Dohan Designs",
      rating: 5
    },
    {
      quote: "The work that we're creating together is amazing. The team's dedication to providing top-notch IT professional services has shone through in their outstanding work thus far. They have been incredibly patient, flexible, and responsive partners who value collaboration above all else.",
      author: "Stephen DiMauro",
      position: "Founder, ENGL Education",
      rating: 4
    },
    {
        quote: "The work that we're creating together is amazing. The team's dedication to providing top-notch IT professional services has shone through in their outstanding work thus far. They have been incredibly patient, flexible, and responsive partners who value collaboration above all else.",
        author: "Seenu Vasan",
        position: "Founder, sick solucation",
        rating: 3
      }
    // Add more testimonials here
  ];

  return (
    <div className="slider-container position-static">
      <h2>Hear From Our Valued Customers</h2>
      <p>We are committed to providing top-notch solutions and guaranteeing our clients satisfaction with our services. Our satisfied customers have shared their experiences working with us,
         which showcase the strength of our relationship as a service provider and the excellence of our solutions.</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card">
            <img src="https://www.softtechgroup.us/theme/img/text-quotes.png" alt="" />
            <div className="quote">{testimonial.quote}</div>
            <div className="author">{testimonial.author}</div>
            <div className="position">{testimonial.position}</div>
            <div className="rating">
              {Array(testimonial.rating).fill('⭐').join(' ')}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlidingCard;

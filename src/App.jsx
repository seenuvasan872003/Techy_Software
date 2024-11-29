// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import FeedbackForm from './components/FeedbackForm';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <FeedbackForm />
      </main>
      <Footer />
    </Router>
  );
};

export default App;

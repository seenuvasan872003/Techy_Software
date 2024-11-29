// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      name,
      feedback,
    };

    axios.post('http://localhost:5000/api/feedback', feedbackData)
      .then(response => {
        console.log('Success:', response.data);
        setSubmitted(true);
        fetchFeedbackList(); // Fetch the updated feedback list
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fetchFeedbackList = () => {
    axios.get('http://localhost:5000/api/feedback')
      .then(response => {
        setFeedbackList(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback list:', error);
      });
  };

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  return (
    <div className='feedback-container d-block'>
      <div className="feedback-card">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h2>Feedback Form</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Your feedback here..."
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="thank-you">
            <h2>Thank you for your feedback, {name}!</h2>
            <p>We appreciate your input.</p>
          </div>
        )}
      </div>

      <div className="feedback-list">
        <h3>Submitted Feedback</h3>
        <ul>
          {feedbackList.map((fb, index) => (
            <li key={index}>
              <strong>{fb.name}:</strong> {fb.feedback}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackForm;

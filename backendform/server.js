import express from 'express';
import { readFile, writeFile } from 'fs/promises';
import helmet from 'helmet';
import cors from 'cors'; 
// Import JSON file with assertion
import contacts from './contacts.json' assert { type: 'json' }; 
const app = express();
const PORT = 5000;
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://trusted.cdn.com"],
      styleSrc: ["'self'", "https://trusted.cdn.com"],
      imgSrc: ["'self'", "data:", "https://trusted.cdn.com"],
      connectSrc: ["'self'", "http://localhost:5000"],
      // Add other directives as needed
    }
  }
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Homepage');
});

app.get('/api/contacts', (req, res) => {
  res.json(contacts); // Returns the contents of contacts.json
});

app.post('/api/contact/submit', async (req, res) => {
  const newContact = req.body;

  try {
    const data = await readFile('contacts.json', 'utf8');
    const contacts = JSON.parse(data);
    contacts.push(newContact);
    await writeFile('contacts.json', JSON.stringify(contacts, null, 2));
    res.status(200).json({ message: 'Contact saved successfully!' });
  } catch (err) {
    if (err.code === 'ENOENT') {
      // File doesn't exist, create it with the first contact
      await writeFile('contacts.json', JSON.stringify([newContact], null, 2));
      res.status(200).json({ message: 'Contact saved successfully!' });
    } else {
      res.status(500).json({ error: 'Failed to process data' });
    }
  }
});






// Route to handle feedback submission
app.post('/api/feedback', async (req, res) => {
  const newFeedback = req.body;

  try {
    const data = await readFile('feedback.json', 'utf8');
    const feedbackList = JSON.parse(data);
    feedbackList.push(newFeedback);
    await writeFile('feedback.json', JSON.stringify(feedbackList, null, 2));
    res.status(200).json({ message: 'Feedback submitted successfully!' });
  } catch (err) {
    if (err.code === 'ENOENT') {
      // File doesn't exist, create it with the first feedback
      await writeFile('feedback.json', JSON.stringify([newFeedback], null, 2));
      res.status(200).json({ message: 'Feedback submitted successfully!' });
    } else {
      res.status(500).json({ error: 'Failed to process feedback' });
    }
  }
});

// Route to get all feedback
app.get('/api/feedback', async (req, res) => {
  try {
    const data = await readFile('feedback.json', 'utf8');
    const feedbackList = JSON.parse(data);
    res.json(feedbackList);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve feedback' });
  }
});





app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

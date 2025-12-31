const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up static files middleware
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname)));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submissions (reservation form)
app.post('/api/reservation', (req, res) => {
  const { name, phone, person, 'reservation-date': date, message } = req.body;
  
  // Here you can add database logic or email sending logic
  console.log('Reservation received:', { name, phone, person, date, message });
  
  res.json({ 
    success: true, 
    message: 'Reservation request received successfully!' 
  });
});

// Handle newsletter subscription
app.post('/api/subscribe', (req, res) => {
  const { email_address } = req.body;
  
  // Here you can add database logic or email sending logic
  console.log('Newsletter subscription:', { email_address });
  
  res.json({ 
    success: true, 
    message: 'Thank you for subscribing!' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Import necessary modules
const express = require('express');

const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
// Initialize the app and configure middleware
const app = express();
app.use(express.json())

// Connect to MongoDB
const db = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Laptop4dev1');
        console.log("database connection establish");
        
    } catch (error) {
      console.log('error connecting to database');
        
    }
}

db();
// Define a Mongoose schema and model for applicants
const applicantSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true
 },
  lastName: { 
    type: String, 
    required: true
 },
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  phone: { 
    type: String, 
    required: true 
},
  reason: { 
    type: String, 
    required: true 
}
});
const Applicant = mongoose.model('Applicant', applicantSchema);

// Endpoint to accept data of interested applicants
app.post('/applicants', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, reason } = req.body;
    console.log(req.body);

    // Validate input
    if (!firstName || !lastName || !email || !phone || !reason) {
      return res.status(400).json({ message: 'All fields are required.' });
    }


    // Save the applicant to the database
    const newApplicant = new Applicant({ firstName, lastName, email, phone, reason });
    await newApplicant.save();
    res.status(201).json({ message: 'Application submitted successfully.' });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: 'Email already exists.' });
    } else {
      res.status(500).json({ message: 'An error occurred.', error: err.message });
    }
  }
});

// Endpoint to view all applicants' data
app.get('/applicants', async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json(applicants);
  } catch (err) {
    res.status(500).json({ message: 'An error occurred.', error: err.message });
  }
});

// Endpoint to get the total number of applicants
app.get('/applicants/count', async (req, res) => {
  try {
    const count = await Applicant.countDocuments();
    res.status(200).json({ totalApplicants: count });
  } catch (err) {
    res.status(500).json({ message: 'An error occurred.', error: err.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

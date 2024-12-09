// app.js
const express = require('express');
const connectDB = require('./config/db');
const items = require('./routes/items');
const cors = require('cors');

const qrcodes = require('./routes/qrcodes');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/items', items);
app.use('/api/qrcodes', qrcodes);  
// app.get('/qrcodes', async (req, res) => {
//     try {
//       const qrCodes = await QRModel.find();
//       res.json(qrCodes);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
  

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port 2 ${PORT}`));

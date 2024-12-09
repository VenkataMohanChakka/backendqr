// routes/qrcodes.js
const express = require('express');
const router = express.Router();
const qrController = require('../controllers/qrController');

// Generate a QR code and save it to MongoDB
router.post('/generate', qrController.generateQRCode);

// Retrieve all QR codes
router.get('/', qrController.getAllQRCodes);

// Validate scanned QR code data
router.post('/validate', qrController.validateQRCode);

module.exports = router;

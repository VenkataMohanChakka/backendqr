// models/QRCode.js
const mongoose = require('mongoose');

const qrSchema = new mongoose.Schema({
  qrData: { type: String, required: true },
  qrImage: { type: String, required: true },
});

module.exports = mongoose.model('QRCode', qrSchema); // "QRCode" becomes the "qrcodes" collection in MongoDB

// controllers/qrController.js
const QRCode = require('qrcode');
const QRModel = require('../modals/QRCode');

// Generate a QR code and save it to MongoDB
exports.generateQRCode = async (req, res) => {
  const { qrData } = req.body;
  try {
    const qrImage = await QRCode.toDataURL(qrData);
    const qrCode = new QRModel({ qrData, qrImage });
    await qrCode.save();
    res.status(201).json(qrCode);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve all QR codes
exports.getAllQRCodes = async (req, res) => {
  try {
    const qrCodes = await QRModel.find();
    res.json(qrCodes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Validate scanned QR code data
exports.validateQRCode = async (req, res) => {
  const { qrData } = req.body;
  try {
    const qrCode = await QRModel.findOne({ qrData });
    if (qrCode) {
      res.json({ success: true, message: 'QR Code is valid' });
    } else {
      res.json({ success: false, message: 'QR Code not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

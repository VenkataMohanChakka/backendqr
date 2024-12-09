// routes/items.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Create a new item
router.post('/', itemController.createItem);

// Read all items
router.get('/', itemController.getAllItems);

// Read a specific item by ID
router.get('/:id', itemController.getItemById);

// Update an item by ID
router.put('/:id', itemController.updateItem);

// Delete an item by ID
router.delete('/:id', itemController.deleteItem);

module.exports = router;

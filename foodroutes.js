// routes/foodRoutes.js

const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Create a new food item
router.post('/', async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all food items
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve a specific food item by ID
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) throw new Error('Food item not found');
    res.json(food);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update a food item
router.put('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!food) throw new Error('Food item not found');
    res.json(food);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a food item
router.delete('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) throw new Error('Food item not found');
    res.json({ message: 'Food item deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;

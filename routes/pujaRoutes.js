const express = require('express');
const router = express.Router();
const Puja = require('../models/Puja');

// Search route
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }
    
    const pujas = await Puja.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { tag: { $regex: query, $options: 'i' } },
        { location: { $regex: query, $options: 'i' } }
      ]
    });
    
    res.json(pujas);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get puja by date
router.get('/date/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const pujas = await Puja.find({ date });
    res.json(pujas);
  } catch (error) {
    console.error('Error fetching pujas by date:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all pujas
router.get('/', async (req, res) => {
  try {
    const pujas = await Puja.find();
    res.json(pujas);
  } catch (error) {
    console.error('Error fetching all pujas:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get puja by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const puja = await Puja.findById(id);
    
    if (!puja) {
      return res.status(404).json({ message: 'Puja not found' });
    }
    
    res.json(puja);
  } catch (error) {
    console.error('Error fetching puja:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
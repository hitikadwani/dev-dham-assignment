// This file will help you seed your database with initial puja data
// Save this as seed-data.js in your project

const mongoose = require('mongoose');
require('dotenv').config();

// Import the Puja model (assuming it's defined in a separate file)
// If you're using the integrated approach from server.js, you'll need to extract the model to a separate file first
const Puja = require('./models/Puja');

// Sample puja data
const pujaData = [
  {
    title: "Akshaya Tritiya Puja",
    tag: "Akshaya Tritiya",
    date: "2025-05-10", // Format: YYYY-MM-DD
    location: "Temple or Home",
    benefits: "Considered highly auspicious for new beginnings, wealth generation, and long-term prosperity.",
    description: "Akshaya Tritiya is one of the most auspicious days in the Hindu calendar. 'Akshaya' means imperishable or eternal - that which never diminishes. Performing puja on this day is believed to bring unending prosperity."
  },
  {
    title: "Ganesh Chaturthi",
    tag: "Ganesh Chaturthi",
    date: "2025-09-02",
    location: "Home or Community Pandals",
    benefits: "Removes obstacles, brings wisdom, prosperity, and good fortune.",
    description: "Ganesh Chaturthi celebrates the birth of Lord Ganesha, the elephant-headed deity. The festival involves installing clay idols of Ganesha and worshipping them with elaborate rituals."
  },
  {
    title: "Navratri Puja",
    tag: "Navratri",
    date: "2025-10-03",
    location: "Temple or Home",
    benefits: "Spiritual growth, victory over negativity, and divine blessings from Goddess Durga.",
    description: "Navratri is a nine-night festival celebrating the divine feminine. Each day is dedicated to a different form of Goddess Durga, with specific rituals and offerings."
  },
  {
    title: "Diwali Lakshmi Puja",
    tag: "Diwali",
    date: "2025-11-12",
    location: "Home",
    benefits: "Wealth, prosperity, and divine blessings from Goddess Lakshmi.",
    description: "Lakshmi Puja is performed on Diwali, the festival of lights. Homes are cleaned and decorated with lamps to welcome Goddess Lakshmi, who is believed to visit and bless homes that are well-lit and clean."
  },
  {
    title: "Saraswati Puja",
    tag: "Vasant Panchami",
    date: "2026-01-31",
    location: "Home or Educational Institutions",
    benefits: "Knowledge, wisdom, arts, and academic success.",
    description: "Saraswati Puja is performed to honor Goddess Saraswati, the deity of knowledge, music, arts, and learning. Students especially pray for success in their studies."
  },
  {
    title: "Maha Shivratri",
    tag: "Maha Shivratri",
    date: "2026-02-17",
    location: "Shiva Temples or Home",
    benefits: "Spiritual awakening, overcoming darkness and ignorance, Lord Shiva's blessings.",
    description: "Maha Shivratri is the great night of Lord Shiva. Devotees fast, stay awake all night, and perform abhishekam (ritual bathing of the Shiva Lingam) to receive his blessings."
  },
  {
    title: "Ram Navami",
    tag: "Ram Navami",
    date: "2026-04-05",
    location: "Temples dedicated to Lord Ram or Home",
    benefits: "Righteousness, moral strength, and Lord Ram's divine protection.",
    description: "Ram Navami celebrates the birth of Lord Ram, the seventh avatar of Lord Vishnu. Devotees recite the Ramayana and perform special prayers to honor his life and teachings."
  }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/puja-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connection established for seeding');
  
  try {
    // Clear existing data
    await Puja.deleteMany({});
    console.log('Cleared existing puja data');
    
    // Insert new data
    const result = await Puja.insertMany(pujaData);
    console.log(`Successfully seeded ${result.length} puja entries`);
    
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
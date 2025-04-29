# 📿 Puja API Server

A **Node.js + Express** backend API for the **DevDham Puja** website. This server provides structured access to information about Hindu pujas, festivals, and ceremonies.

---

## ✨ Features

- 🔍 Search for pujas by **title**, **tag**, or **location**  
- 📅 Get pujas by **specific date**  
- 📃 Fetch a list of **all available pujas**  
- 📖 Get detailed information about a **specific puja**

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Cloud)**
- **Mongoose ODM**
- **CORS middleware**

---


## Installation

### Step 1. Clone the repository:
```bash
https://github.com/hitikadwani/dev-dham-assignment.git
```
### Step2. Install dependencies:
```bash
npm install
```
### Step3. Create a .env file in the root directory:
```bash
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/pujas
```
Note: Replace the MongoDB URI with your actual connection string from MongoDB Atlas


## Running the Application

 

### Step 1: Start the server:


```bash
npm start
```
For development with auto-restart:
```bash
npm run dev
```

### Step 2: Seed the database with initial data:
```bash
npm run seed
``` 




## API Endpoints

### Search for Pujas

```bash
GET /api/puja/search?query={searchTerm}
```

Search for pujas by title, tag, or location

### Get Pujas by Date
```bash
GET /api/puja/date/{date}
```

### Get All Pujas
```bash
GET /api/puja
```
Get all available pujas

### Get Puja by ID
```bash
GET /api/puja/{id}
```
Get detailed information about a specific puja

### Example API Response

```bash
{
  "_id": "60d5ec9c9f1b7a001c8e5b4a",
  "title": "Akshaya Tritiya Puja",
  "tag": "Akshaya Tritiya",
  "date": "2025-05-10",
  "location": "Temple or Home",
  "benefits": "Considered highly auspicious for new beginnings, wealth generation, and long-term prosperity.",
  "description": "Akshaya Tritiya is one of the most auspicious days in the Hindu calendar. 'Akshaya' means imperishable or eternal - that which never diminishes. Performing puja on this day is believed to bring unending prosperity."
}
```



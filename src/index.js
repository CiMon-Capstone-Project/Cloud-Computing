// app.js
import express from 'express';
import dotenv from 'dotenv';
import { verifyToken } from './middleware/authMiddleware.js';
import Database from './config/Database.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Initialize database instance
const db = new Database();
db.testConnection().then(() => {
  console.log('Database connected successfully!');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define route for getting treatment by ID
app.get('/treatment/:id', async (req, res) => {
  const treatmentId = req.params.id;
  const query = 'SELECT * FROM treatments WHERE treatment_id = ?';

  try {
    // Use the pool from the Database instance
    const [results] = await db.pool.query(query, [treatmentId]);

    if (results.length === 0) {
      return res.status(404).json({ message: `Treatment not found for ID: ${treatmentId}` });
    }

    // Send the fetched data
    res.status(200).json({
      status: 'success',
      message: 'Treatment data fetched successfully',
      data: results[0], // Return the first result
    });
  } catch (error) {
    console.error('Database query error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Default route for testing API
app.get('/', (req, res) => {
  res.send('Welcome to Cimon API server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
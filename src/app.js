import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());


// Root route
app.get('/', (req, res) => {
  res.send('Portfolio Backend is running!');
});

export default app;

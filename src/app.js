import dotenv from 'dotenv';
import express from 'express';
import cors from "cors"
import { projectRouter } from './module/projects/project.route.js';
dotenv.config();

const app = express();
app.use(cors({
  origin: "*",
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use("/api", projectRouter)
// Root route
app.get('/', (req, res) => {
  res.send('Portfolio Backend is running!');
});

export default app;

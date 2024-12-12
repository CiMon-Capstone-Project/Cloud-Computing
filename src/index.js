import express from 'express';
import dotenv from "dotenv"
import router from './routes/routes.js';
import cors from 'cors'; // Import CORS middleware
import bodyParser from 'body-parser'; // Import body-parser middleware
dotenv.config();
const PORT = process.env.PORT || 9002;

const app = express(); // Create an Express application
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.get("/", (req, res) => {
  res.send("Welcome to Cimon API server!🚀");
});
app.use("/api",router)

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";
  res.status(err.statusCode).json({
      message: err.message,
  });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on PORT ${PORT}. whoooshh🚀🚀`);
});
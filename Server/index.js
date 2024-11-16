import express from "express";
import route from "./Routes/userRoute.js";
import route1 from "./Routes/RevRoute.js";
import route2 from "./Routes/articleRoute.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000", 
  "https://tech-news-khaki.vercel.app/", 
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, 
  })
);

// Route prefixes for each route
app.use("/users", route);
app.use("/reviews", route1);
app.use("/articles", route2);

// MongoDB connection using environment variable
mongoose
  .connect("mongodb+srv://velmuruganabr:81444vel@cluster0.71pvp.mongodb.net/tech_news?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

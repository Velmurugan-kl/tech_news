import express from "express";
import route from "./Routes/userRoute.js";
import mongoose from "mongoose";
import cors from "cors"; 
import route1 from "./Routes/RevRoute.js";
import route2 from "./Routes/articleRoute.js";

const app = express();

app.use(express.json());
app.use(cors()); 
app.use("/", route);
app.use("/",route1);
app.use("/",route2);

app.listen(3001);

mongoose
  .connect(
    "mongodb+srv://velmuruganabr:81444vel@cluster0.71pvp.mongodb.net/tech_news?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

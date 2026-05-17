import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
//path for authentication routes 

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  // server is running at http://localhost:3000
  //connect to the database
  connectDB();
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

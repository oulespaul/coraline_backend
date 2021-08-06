import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();

import profileRoutes from "./routes/profile";
import authRoutes from "./routes/auth";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.use("/uploads", express.static("uploads"));

//Authentication
app.use("/auth", authRoutes);

//Profile
app.use("/profile", profileRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is running on port: ${port}`);
});

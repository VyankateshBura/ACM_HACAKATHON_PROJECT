const express = require("express");
const app = require("./app");
const cloudinary = require("cloudinary")


const dotenv = require('dotenv');

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

dotenv.config({ path: "config/config.env" });
// require('dotenv');
// dotenv.config();
// console.log(process.env);

const connectDatabase = require("./config/database");

connectDatabase();



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let port = process.env.PORT;
app.listen(port, function () {
  console.log(`sever is running on port ${port}`);
});
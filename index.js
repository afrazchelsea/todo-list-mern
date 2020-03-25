const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const routes = require("./routes/api");
// const path = require("path");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use("/api", routes);
app.use((err, req, res, next) => {
  console.log(err);
  next();
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow.bold);
});

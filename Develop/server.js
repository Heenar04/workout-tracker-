const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require('path');

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true });

// Bring in our routes
require("./routes/api")(app);
require("./routes/html")(app);


app.listen(process.env.PORT || 3000, () => {
    console.log("App running on port 3000!");
  });
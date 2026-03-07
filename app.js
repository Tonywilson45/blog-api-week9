require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require('./database/connectDB');
const Requestlogger = require('./middlewares/logger.js');
const errorhandler = require('./middlewares/errorHandler.js');

const articleRoutes = require("./routes/article.route.js");

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());

app.use(cors('*'));

app.use(Requestlogger);

app.use("/api", articleRoutes);

app.use(errorhandler);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
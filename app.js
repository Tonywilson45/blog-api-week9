const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const checkEnv = require("./src/config/.envCheck.js");
checkEnv();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require('./src/config/connectDB.js');
const Requestlogger = require('./src/middleware/logger.js');
const errorhandler = require('./src/middleware/errorHandler.js');

const articleRoutes = require("./src/routes/article.route.js");
const userRoutes = require("./src/routes/user.route.js");

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());

app.use(cors('*'));

app.use(Requestlogger);

app.use("/api/articles", articleRoutes);
app.use("/api/users", userRoutes);

app.use(errorhandler);


app.get("/", (req, res) => {
    res.send("Welcome to the Article API");
});


console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


module.exports = app;
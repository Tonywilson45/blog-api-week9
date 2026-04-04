const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line to check if MONGO_URI is loaded
console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debugging line to check if JWT_SECRET is loaded


const checkEnv = require("./src/config/.envCheck.js");
checkEnv();

const cors = require("cors");
const connectDB = require('./src/config/connectDB.js');
const Requestlogger = require('./src/middleware/logger.js');
const errorhandler = require('./src/middleware/errorHandler.js');

const articleRoutes = require("./src/routes/articleRoutes.js");
const userRoutes = require("./src/routes/userRoutes.js");
const uploadRoutes = require("./src/routes/uploadRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors());
app.use(Requestlogger);

app.use("/api/upload", uploadRoutes);

// routes
app.use("/api/articles", articleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

// serve images
app.use("/uploads", express.static("uploads"));

// home route
app.get("/", (req, res) => {
    res.send("Welcome to the Article API");
});

// error handler (keep last)
app.use(errorhandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
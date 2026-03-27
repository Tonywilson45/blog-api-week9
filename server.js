require('dotenv').config();
require('./src/config/env');

const app = require('./app');
const connectDB = require('./src/config/connectDB');

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
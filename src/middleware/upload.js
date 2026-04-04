const multer = require('multer');
const cloudinary = require('../config/cloudinary.js');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allow_formats: ["jpg", "jpeg", "png", "gif"]
  }
});


const upload = multer({ storage: storage });

module.exports = upload;
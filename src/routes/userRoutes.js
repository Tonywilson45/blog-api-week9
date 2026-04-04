const express = require("express");

const multer = require("multer");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware.js");

// import controllers
const {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// routes

router.post("/upload", upload.single("image"), (req, res) => {
  
  const fileUrl = req.file.path; // Get the URL of the uploaded file from Cloudinary
  const fileName = req.file.filename; // Get the filename of the uploaded file from Cloudinary

  console.log("File URL:", fileUrl);
  console.log("File Name:", fileName);
  
  res.send("Hello,  from upload route");
}); 

// create user
router.post("/register", registerUser);

// login user
router.post("/login", loginUser);

// get all users
router.get("/", getAllUsers);

// get one user
router.get("/:id", getSingleUser);

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

module.exports = router;

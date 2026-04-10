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


/**
 * @swagger
 * /api/users/upload:
 *   post:
 *     summary: Upload user image
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 */
router.post("/upload", upload.single("image"), (req, res) => {
  const fileUrl = req.file.path;
  const fileName = req.file.filename;

  console.log("File URL:", fileUrl);
  console.log("File Name:", fileName);
  
  res.send("Hello, from upload route");
});


/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: Tony
 *               email:
 *                 type: string
 *                 example: tony@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/register", registerUser);


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", loginUser);


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: tony@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login successful
 */
router.get("/", getAllUsers);


/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get single user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 */
router.get("/:id", getSingleUser);


/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User updated
 */
router.put("/:id", updateUser);


/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User deleted
 */
router.delete("/:id", deleteUser);

module.exports = router;
# 📦 Blog API (Week 9 Project)

A fully functional **Blog API** built with **Node.js, Express, and MongoDB**, featuring **authentication, image upload, and cloud storage integration (Cloudinary)**.

---

## 🚀 Features

* 📝 Create, read, update, and delete blog articles
* 📷 Image upload using Multer
* ☁️ Cloudinary integration for image storage
* 🔐 JWT Authentication system
* 🧱 Modular MVC architecture
* ⚠️ Centralized error handling
* 📊 Logging system

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Cloudinary
* Multer
* JSON Web Token (JWT)

---

## 📁 Project Structure

```bash
src/
│
├── config/
│   ├── connectDB.js
│   ├── cloudinary.js
│   └── envCheck.js
│
├── controllers/
│   ├── article.controller.js
│   ├── uploadController.js
│   └── userController.js
│
├── middleware/
│   ├── errorHandler.js
│   ├── logger.js
│   ├── requireAuth.js
│   ├── upload.js
│   ├── uploadMiddleware.js
│   └── validateArticle.js
│
├── models/
│   ├── article.model.js
│   └── user.model.js
│
├── routes/
│
├── uploads/
│
├── utils/
│
├── .env
├── .env.example
├── app.js
└── server.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ Running the App

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Run production

```bash
node server.js
```

Server runs on:

```bash
http://localhost:4000
```

---

## 📡 API Endpoints

### 🔐 Authentication

* `POST /api/users/register`
* `POST /api/users/login`

---

### 📝 Articles

* `POST /api/articles` → Create article
* `GET /api/articles` → Get all articles
* `GET /api/articles/:id` → Get single article
* `PUT /api/articles/:id` → Update article
* `DELETE /api/articles/:id` → Delete article

## ⚠️ Error Handling

* Centralized error handler middleware
* Custom validation middleware
* Proper HTTP status codes

---

## 📌 Deployment

This project can be deployed using:

* Render (recommended)
* github

---

## 📸 Assignment Deliverables

* ✅ GitHub repository with clean structure
* ✅ Deployed API on Render
* ✅ Postman test screenshot (live URL)

---

## 👨‍💻 Author

**Anyanwu Chukwuebuka**


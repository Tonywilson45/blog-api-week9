const express = require("express");

const {
    postArticle,
    getAllArticle,
    getArticleById,
    updateArticleByid,
    deleteArticleByid
} = require('../controllers/article.controller.js');
const requireAuth = require("../middlewares/requireAuth.js");

const { 
    validateArticle, 
    validateUpdateArticle,
} = require("../middlewares/validateArticle.js");

const router = express.Router();

router.post('/articles', validateArticle, requireAuth, postArticle);

router.get('/articles', requireAuth, getAllArticle);

router.get('/articles/:id', requireAuth, getArticleById);

router.put('/articles/:id', validateUpdateArticle, requireAuth, updateArticleByid);

router.delete('/articles/:id', requireAuth, deleteArticleByid);

module.exports = router;

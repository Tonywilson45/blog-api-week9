const express = require("express");

const {
    postArticle,
    getAllArticle,
    getArticleById,
    updateArticleByid,
    deleteArticleByid
} = require('../controllers/article.controller.js');

const router = express.Router();

router.post('/articles', postArticle);

router.get('/articles', getAllArticle);

router.get('/articles/:id', getArticleById);

router.put('/articles/:id', updateArticleByid);

router.delete('/articles/:id', deleteArticleByid);

module.exports = router;

const express = require("express");

const {
    postArticle,
    getAllArticle,
    getArticleById,
    updateArticleByid,
    deleteArticleByid
} = require('../controllers/article.controller.js');
const requireAuth = require("../middleware/requireAuth.js");

const { 
    validateArticle, 
    validateUpdateArticle,
} = require("../middleware/validateArticle.js");

const router = express.Router();

router.post('/', validateArticle,);

router.get('/',  getAllArticle);

router.put('/:id', validateUpdateArticle, requireAuth, updateArticleByid);

router.delete('/:id', requireAuth, deleteArticleByid);

module.exports = router;

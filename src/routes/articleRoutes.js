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


/**
 * @swagger
 * /api/articles:
 *   post:
 *     summary: Create article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: My first blog
 *               content:
 *                 type: string
 *                 example: This is my article content
 *     responses:
 *       201:
 *         description: Article created
 */
router.post('/', requireAuth, validateArticle, postArticle);


/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Get all articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: List of articles
 */
router.get('/', getAllArticle);


/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Get single article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Article ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Article found
 */
router.get('/:id', getArticleById);


/**
 * @swagger
 * /api/articles/{id}:
 *   put:
 *     summary: Update article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Article updated
 */
router.put('/:id', validateUpdateArticle, requireAuth, updateArticleByid);


/**
 * @swagger
 * /api/articles/{id}:
 *   delete:
 *     summary: Delete article
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Article deleted
 */
router.delete('/:id', requireAuth, deleteArticleByid);


module.exports = router;
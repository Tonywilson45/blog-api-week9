const Joi = require("joi");

const ArticleModel = require("../models/article.model.js");

const postArticle = async (req, res, next) => {
try {
    const newArticle = new ArticleModel({
        title: req.body.title,
        content: req.body.content,
        author: req.user._id
    });
    await newArticle.save();

    res.status(200).json({
        message: "Article created successfully",
        data: newArticle
    });
} catch (error) {

    console.error(error);
    next(error);
}
};

const getAllArticle = async (req, res, next) => {
try {
    console.log(req.user);
    const articles = await ArticleModel.find()

    res.status(200).json({
        message: "Articles retrieved successfully",
        data: articles
    });
} catch (error) {
    console.error(error);
    next(error);
}
};

const getArticleById = async (req, res, next) => {
try {
    
    const article = await ArticleModel.findById(req.params.id);

    if (!article) {
        return res.status(404).json({
            message: `Article with ${req.params.id} not found`
        });
    }
    res.status(200).json({
        message: 'Article retrieved successfully',
        data: article
    });
} catch (error) {
    console.error(error);
    next(error);
}
};

const updateArticleByid = async (req, res, next) => {

    const schema = Joi.object({
        title: Joi.string().min(5).optional(),
        content: Joi.string().min(20).optional(),
        author: Joi.string().optional()
    });

    const { error , value } = schema.validate(req.body);

    if (error) {
        return res.status(400).json("Please provide valid article data and content");
    }
    try {
        const updatedarticle = await ArticleModel.findByIdAndUpdate(req.params.id, value, { new: true, runValidators: true });

        if (!updatedarticle) {
            return res.status(404).json({
                message: 'Article not found'
            });
        }
        res.status(200).json({
            message: 'Article updated successfully',
            data: updatedarticle
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const deleteArticleByid = async (req, res, next) => {
    try {
        const deletedarticle = await ArticleModel.findByIdAndDelete(req.params.id);

        if (!deletedarticle) {
            return res.status(404).json({
                message: 'Article not found'
            });
        }
        res.status(200).json({
            message: 'Article deleted successfully',
            data: deletedarticle
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

module.exports = {getAllArticle, postArticle, getArticleById, updateArticleByid, deleteArticleByid};
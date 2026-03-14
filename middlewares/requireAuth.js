const jwt = require('jsonwebtoken');
const userModel = require("../models/user.model.js");

const requireAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(401).json({ message: 'Access denied. No token provided.' });

    const token = authHeader.replace('Bearer ', '');

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(payload.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user; // now every route knows who is logged in
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token or expired token.' });
    }
};


module.exports = requireAuth;
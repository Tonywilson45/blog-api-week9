const { JsonWebTokenError } = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res, next) => {

    const registerSchema = Joi.object({
        username: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = registerSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
try {   


    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(12);  
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
        email: email,
        username: username,
        password: hashedPassword,
    });

    await user.save();
    res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        next(error);
    }
    };

    const loginUser = async (req, res, next) => {
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        });

        const { error } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        try {
            const { email, password } = req.body;

            const user = await UserModel.findOne({ email: email });

            if (!user) {
                return res.status(404).json({ message: 'User does not exist' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign(
                { userId: user._id, name: user.username }, // payload
                process.env.JWT_SECRET, // secret
                { expiresIn: '7d' } // options
            );

            const resUser = {
                _id: user._id,
                email: user.email,
                username: user.username,
            };

            res.status(200).json({ message: 'Login successful', user: resUser, token });
        } catch (error) {
            next(error);
        }
    };

module.exports = { registerUser, loginUser };

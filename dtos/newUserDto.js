const { body } = require('express-validator');

const newUserValidationRules = [
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name should contain at least 2 characters'),

    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage(''),

    body('password').isLength({ min: 6 }).withMessage('Password must contain atleast 6 characters'),

];

module.exports = { newUserValidationRules };
const express = require('express');
const router = express.Router();

const userAuthController = require('../controllers/userAuthController');
const { newUserValidationRules } = require('../dtos/newUserDto');
const validateRequest = require('../middlewares/validateRequest');

router.post('/register', newUserValidationRules, validateRequest, userAuthController.newUser);

module.exports = router;

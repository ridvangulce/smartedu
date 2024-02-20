const express = require('express');
const authController = require('../controllers/authController.js');

const router = express.Router();

router.route('/signup').post(authController.createUser);

module.exports = router;

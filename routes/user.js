const express = require('express');
const router = express.Router();
const {
  signUpEn,
  signInEn,
  getUserEn,
  checkEmail,
} = require('../controllers/user');

const verifyToken = require('../middleware/auth');

router.route('/signupen').post(signUpEn);

router.route('/signinen').post(signInEn);

router.route('/getuseren').get(verifyToken, getUserEn);

router.route('/checkemail').post(checkEmail);



module.exports = router;

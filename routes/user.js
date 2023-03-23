const express = require('express');
const router = express.Router();
const {
  signUpEn,
  signInEn,
  getUserEn,
  checkEmail,
  signInWithGoogle,
  signInWithFacebook,
} = require('../controllers/user');

const verifyToken = require('../middleware/auth');

router.route('/signupen').post(signUpEn);

router.route('/signinen').post(signInEn);

router.route('/getuseren').get(verifyToken, getUserEn);

router.route('/checkemail').post(checkEmail);

router.route('/signInWithGoogle').post(signInWithGoogle); 

router.route('/signinwithfacebook').post(signInWithFacebook);

router.route('/signinwithinstagram').post(signInWithFacebook);

module.exports = router;

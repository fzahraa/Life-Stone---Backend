const User = require('../models/user');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

//@desc      User signup
//@route     Post /user/signupen
//@access    Public

exports.signUpEn = async (req, res) => {
  let { name, email, password, phoneNumber } =
    req.body;
  try{
      User.findOne({ email })
      .then((result) => {
        if (result) {
          return res.json({
            status: 'FAILED',
            message: 'User with provided email already exists',
          });
        } else {
            const newUser = new User({
              name_en: name,
              email,
              password,
              phoneNumber,
            });
            newUser
              .save()
              .then(() => {
                return res.json({
                  status: 'SUCCESS',
                  message: 'SignedUp successfully',
                });
              })
              .catch((err) => {
                return res.json({
                  status: 'FAILED',
                  message: 'An error occurred while saving user account',
                  error: err,
                });
              });
          }
        })
      } 
      catch(err){
      return res.json({
        status: 'FAILED',
        message: 'Error while processing email',
        error: err,
      });
    };
};


//@desc      User signin
//@route     Post /user/signinen
//@access    Public

exports.signInEn = async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        status: 'FAILED',
        message: 'User with this email does not exist',
      });
    }

    if (user.password !== password) {
      return res.json({
        status: 'FAILED',
        message: 'Invalid credentials',
      });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 4500000,
      },
      (err, token) => {
        if (err) {
          return res.json({
            status: 'FAILED',
            message: 'An error occurred',
          });
        }
        return res.json({
          status: 'SUCCESS',
          message: 'Signedin successfully',
          token: token,
          user: user,
        });
      }
    );
  } catch (err) {
    return res.json({
      status: 'FAILED',
      message: 'An Error occurred while checking the credentials',
      error: err.message,
    });
  }
};


//@desc      Get user
//@route     get /user/getuseren
//@access    Private

exports.getUserEn = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.json({
        status: 'FAILURE',
        message: 'No user with given id exists',
      });
    }

  

    if (user) {
      return res.json({
        status: 'SUCCESS',
        message: 'Successful request',
        user: user,
        referrals: refferalLink,
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      status: 'FAILURE',
      message: 'There is some error while processing your request',
    });
  }
};





exports.checkEmail = async (req, res) => {
  let { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        status: 'SUCCESS',
        message: 'User with this email does not exist',
      });
    } else {
      return res.json({
        status: 'FAILED',
        message: 'User with this email already exists',
      });
    }
  } catch (err) {
    return res.json({
      status: 'Error',
      message: 'An Error occurred while checking the email',
      error: err.message,
    });
  }
};


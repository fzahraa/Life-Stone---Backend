const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name_en: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    default: null
  },
  phoneNumber: {
    type: String,
  },
  loginType : {
    type: String,
    default: "Simple",
  },
  facebookId : {
    type: String,
    default: "",
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

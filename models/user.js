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
  },
  phoneNumber: {
    type: String,
  },

});

const User = mongoose.model('User', UserSchema);

module.exports = User;

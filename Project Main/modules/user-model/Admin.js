const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cookieId: {
    type: String
  }
});

module.exports.userSchema = userSchema;

const User = mongoose.model('User', userSchema);

module.exports.User = User;

const createUser = (username, password) => {
  return user = new User({username, password});
};

module.exports.createUser = createUser;

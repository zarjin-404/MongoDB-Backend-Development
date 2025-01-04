const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose');

const userSchema = mongoose.Schema({
  fullName: String,
  userName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('user', userSchema);

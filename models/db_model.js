const mongoose = require("mongoose");



// user Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    maxlength: [20, "name is too long"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: { type: String, required: [true, "fill in a password"] },
});

module.exports = mongoose.model("user", userSchema);

const mongoose = require("mongoose");

// user Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: [true, "please provide a user name"],trim:true },

  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "user already exists"],
  },
  password: { type: String, required: [true, "fill in a password"] },
});

module.exports = mongoose.model("user", userSchema);

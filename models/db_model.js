const mongoose = require("mongoose");

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
  dp: { data: Buffer, type: String },
});

module.exports = mongoose.model("user", userSchema);

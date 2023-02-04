const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: String,
    require: [true, "user id required"],
  },
  caption: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("posts", postSchema);

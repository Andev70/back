const express = require("express");
const postRouter = express.Router();
const {
  createPost,
  getAllPosts,
  getUserPosts,
  deletePost,
} = require("../controllers/posts.js");

postRouter.route("/").post(createPost);
postRouter.route("/").get(getAllPosts);
postRouter.route("/:userID").get(getUserPosts).delete(deletePost);
module.exports = postRouter;

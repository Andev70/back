const express = require("express");
const postRouter = express.Router();
const verify = require("../jwt/jwt");
const {
  createPost,
  getAllPosts,
  getUserPosts,
  deletePost,
} = require("../controllers/posts.js");

postRouter.route("/").post(verify, createPost);
postRouter.route("/").get(verify, getAllPosts);
postRouter.route("/:userID").get(verify,getUserPosts).delete(verify,deletePost);
module.exports = postRouter;

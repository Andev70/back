const Post = require("../models/post.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// get posts

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ posts });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

// create post
const createPost = async (req, res) => {
  try {
    const token = req.headers.authorization
    const jwtcode = jwt.verify(token,process.env.JWT_SECRET   )
    req.body.user=jwtcode.id
    const post = await Post.create(req.body);
    res.status(201).json({ post });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

// get posts by user id
const getUserPosts = async (req, res) => {
  try {
    console.log(req.params.userID);

    const userPosts = await Post.find({ user: req.params.userID });
    if (!userPosts) {
      return res.status(404).json("no posts found for the user");
    }
    res.status(200).json({ userPosts });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};
// delete posts
const deletePost = async (req, res) => {
  try {
    const { userID } = req.params;

    const post = await Post.findByIdAndDelete({ _id: userID });
    if (!post) {
      return res.status(404).json({ msg: "no post found" });
    }
    res.status(200).res({ post });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};
module.exports = { createPost, getAllPosts, getUserPosts, deletePost };

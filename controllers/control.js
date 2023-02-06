const User = require("../models/db_model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

// create users

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};
// login
const loginUser = async (req, res) => {
  try {
    const user = req.body.email;
    const code = req.body.password;
    const findUser = await User.findOne({ email: user, password: code });

    if (!findUser) {
      return res.status(404).json({ msg: "Authentication Failed" });
    }
    const id = findUser._id;

    const token = jwt.sign({ id, user }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(200).json({ msg: "login successful", token });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};
// get one user
const getUser = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ msg: "no Authentication id found" });
    }
    const token = authHeader;
    try {
      const jwtcode = jwt.verify(token, process.env.JWT_SECRET);
      const userId = jwtcode.id;
      const user = await User.findOne({_id: userId });
      res.status(200).json(user);
    } catch (e) {
      res.status(401).json({ msg: "restricted route" });
    }
  } catch (e) {
    res
      .status(500)
      .json({ msg: [e, "may be authorization faild or server error"] });
  }
};
// delete user
const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;

    const user = await User.findOneAndDelete({ _id: userID });
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json({ user });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};
module.exports = { getAllUser, createUser, getUser, deleteUser, loginUser };

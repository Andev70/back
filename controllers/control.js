const User = require("../models/db_model");

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

// get one user
const getUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findById({ _id: userID });
    if (!user) {
      return res.status(404).json({ msg: "no user found with that id" });
    }
    res.status(200).json({ user });
  } catch (e) {
    res.status(500).json({ msg: "no user found" });
  }
};
module.exports = { getAllUser, createUser, getUser };

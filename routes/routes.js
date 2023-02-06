const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  getUser,
  deleteUser,
  loginUser,
} = require("../controllers/control.js");
const verify = require("../jwt/jwt");
//user routes
router.route("/").get(getAllUser).post(createUser);
router.route("/login").post(loginUser);
router.route("/user").get(getUser);

module.exports = router;

// post routes

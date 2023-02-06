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
router.route("/").get(verify,getAllUser).post(verify,createUser);
router.route("/login").post(loginUser);
router.route("/user").get(getUser);

module.exports = router;

// post routes

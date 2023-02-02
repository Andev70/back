const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  getUser,
} = require("../controllers/control.js");

// routes
router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getUser);
module.exports = router;

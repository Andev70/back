const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  getUser,
  deleteUser,
} = require("../controllers/control.js");

//user routes
router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;

// post routes

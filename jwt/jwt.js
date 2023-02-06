const jwt = require("jsonwebtoken");
require("dotenv").config();
const verify = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const jwtcode = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).json({ msg: "not authorized to post, get, delete or update" });
  }
};

module.exports = verify;

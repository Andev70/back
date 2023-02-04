const express = require("express");
const app = express();
const colors = require("colors");
const DBconnect = require("./db/connect");
const users = require("./routes/routes.js");
const contact = require("./routes/routes.js");
const cors = require("cors");
const addPost = require("./routes/post-route.js");
require("dotenv").config();
const PORT = process.env.PORT_SERV || 8080;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

// connect to db start server
const startConn = async () => {
  try {
    await DBconnect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server running at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startConn();

// methods
app.use("/api/v1/posts", addPost);
app.use("/api/v1/users", users);

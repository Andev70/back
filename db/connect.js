const mongoose = require("mongoose");

const DBconnect = (url) => {
 return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = DBconnect;

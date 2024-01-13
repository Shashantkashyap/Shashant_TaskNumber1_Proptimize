const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = async () => {
  mongoose
    .connect(
      process.env.MONGODB_URI
    )
    .then(() => console.log("db connected successfully"))
    .catch((e) => console.log("error in db connection,", e));
};

module.exports = dbConnect ; 

const mongoose = require("mongoose");
require('dotenv').config()

const connectDatabase = () => {
  console.log("Wait coneting to the db");

  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.KEY)
    .then(() => console.log("MongDB Atlas Connected ☁"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;

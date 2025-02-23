const mongoose = require("mongoose");

const connectMongo = async (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Mongo DB connected Successfully");
    })
    .catch((err) => {
      console.log("Error while connection to Mongo DB: " + err);
    });
};

module.exports = connectMongo;

const mongoose = require("mongoose");
const env= require("dotenv")
env.config()

const connection = mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.vildgct.mongodb.net/task?retryWrites=true&w=majority");

module.exports = {
  connection,
};
const mongoose = require("mongoose");
const env= require("dotenv")
env.config()

const connection = mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.0agywqe.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");

module.exports = {
  connection,
};
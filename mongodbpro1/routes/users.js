// install Mongodb from community server ✅
// install mongoose js from npm install mongoose ✅

// require and setup connection ✅

const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

moongoose.connect("mongodb://127.0.0.1:27017/collegestudent")

// make schema ✅

const userSchema = moongoose.Schema({
  username : String,
  rollNo : Number,
  faculity  : String
})

// create model and export ✅

module.exports = mongoose.model("studentDetails" , userSchema)
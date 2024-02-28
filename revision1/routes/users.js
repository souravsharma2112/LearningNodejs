// install Mongodb from community server ✅
// --Done
// install mongoose js from npm install mongoose ✅
// --Done

// require and setup connection ✅

const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
moongoose.connect("mongodb://127.0.0.1:27017/studentDetails")

// make schema ✅

const studSchema = moongoose.Schema({
  name : String,
  class : Number,
  sec : String,
  rollNo : Number
})

// create model and export ✅
module.exports = mongoose.model("studentDetails" , studSchema)






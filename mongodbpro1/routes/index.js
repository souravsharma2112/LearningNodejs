var express = require('express');
var router = express.Router();
let mongodata = require('./users')

// create data

router.get('/create' , async function(req , res) {
  const newStudent =  await mongodata.create({
    username : "Saumya",
    rollNo : 21,
    faculity : "Commerce"
  })
  res.send(newStudent)
})

// find data or read data

router.get('/user' , async function(req , res) {
  const newStudent =  await mongodata.find()
  res.send(newStudent)
})
// find only one data or read data

router.get('/userOne' , async function(req , res) {
  const newStudent =  await mongodata.findOne({username : "Saumya"})
  res.send(newStudent)
})

// delete data

router.get('/delete' , async function(req , res) {
  const newStudent =  await mongodata.findOneAndDelete({
    username : "Sourav"
  })
  res.send(newStudent)
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

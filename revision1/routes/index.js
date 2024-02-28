var express = require('express');
var router = express.Router();
var mongoData = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/stud' , async function(req,res){
  const createStudent = await mongoData.create({
    name : "Somya",
    rollNo : "23",
    class : 9,
    sec : "A"
  })
  res.send(createStudent);
})

router.get('/studs' , async function(req,res){
  const createStudent = await mongoData.create({
    name : "Saumya",
    rollNo : "25",
    class : 9,
    sec : "H"
  })
  res.send(createStudent);
})


module.exports = router;

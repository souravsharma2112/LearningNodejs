const express = require('express');
const app = express();

app.use(express.static('./public'))

app.set("view engine" , "ejs")

app.get('/' , function (req , res) {
    res.render("index" , {name : "I'm Sumit"})
})

app.get('/error' , function (req , res) {
    throw new Error("500");
})

app.get('/home' , function (req , res) {
    res.render("home")
})

app.use(function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000);
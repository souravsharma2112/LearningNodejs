const express = require('express');

const app = express();

app.use((req , res , next)=>{
    console.log("Hello i am middleware");
    next();
})

app.get("/" , function(req , res) {
    res.send("Hello I am Home");
});
app.get("/profile/:username" , function(req , res) {
    res.send(`Hello! ${req.params.username}`);
});

app.listen(3000)
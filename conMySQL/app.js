const mysql = require('mysql');
const con = mysql.createConnection({
    host : "localhost" ,
    user : "root",
    password : "asdsd",
    database : "student"
})
con.connect(function(err){
    if (err) {
        throw Error;
    }
    con.query("Select * from Student" , function(err , res){
        if (err) {
            throw Error
        }
        else{
            console.log(res[0].name);
        }
    })
})
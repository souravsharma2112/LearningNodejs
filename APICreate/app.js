const http = require('http')
const hostname = '127.0.0.1'
// const fs = require("fs");
// const text = fs.readFileSync("random.txt" , "utf-8")
const port = 3000;
const marvel = require("./apiData");
// const { json } = require('stream/consumers');
const server = http.createServer(function(req , res){
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text');
    res.write(JSON.stringify(marvel));
    res.end();
})
server.listen(port , hostname , () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
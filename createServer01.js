const http = require("node:http");
const fs = require("fs");
const text = fs.readFileSync("practice2.txt" , "utf-8")
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text');
    res.end(text);
});
server.listen(port , hostname , () => {
    console.log(`Server running at http://${hostname}:${port}`);
})

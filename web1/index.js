const http = require("node:http");
const hostname = '127.0.0.1';
const port = 3000;
const fs = require("fs");

const home = fs.readFileSync('./home.html')

const about = fs.readFileSync('./about.html')

const contact = fs.readFileSync('./contact.html')
const server = http.createServer((req , res)=>{
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text');
    if (url == '/') {
        res.end(home)
    }
    else if(url == '/about'){
        res.end(about)
    }
    else if(url == '/contact'){
        res.end(contact)
    }
    else{
        res.statusCode = 400;
        res.end(`<h1>Error 404 Webpage not Exit.</h1>`)
    }
})


server.listen(port , hostname , () => {
    console.log(`Server running at http://${hostname}:${port}`);
})

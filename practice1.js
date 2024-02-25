const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Filter</title>
    <link rel="stylesheet" href="./style.css">
</head>
<style>
input{
    padding:1px ;
    font-size:2rem;
}
</style>
<body>
    <div class="heading">
        <h1>SearchFilter</h1>
        <button onclick=cartBtn()>Cart</button>
    </div>
    <div class="inputBox">
        <input id="inputBox" type="text" placeholder="search...." onkeyup=takingInputValue()>
    </div>

    <div id="productItem" class="productItem">

    </div>

    <div id="cartItem" class="cart">

    </div>
    <script src="script.js"></script>
</body>
</html>
  `);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
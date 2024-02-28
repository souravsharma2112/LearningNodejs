const fs = require('fs');
const lw = fs.writeFileSync("tst.txt", "Hlo i am newTxt")
const read = fs.readFileSync("tst.txt" , "utf-8")
const rs = fs.createReadStream('read.txt')
// console.log(read);
rs.on("open" , function(){
    console.log("demo file is open");
})
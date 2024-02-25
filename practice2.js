// Learning basic of modules in node js

const fs = require("fs")

let text = fs.readFileSync("practice2.txt", "utf-8");

text = text.replace("practice2" , "practice20");

fs.writeFileSync("practice201.txt" , text)

console.log(text);
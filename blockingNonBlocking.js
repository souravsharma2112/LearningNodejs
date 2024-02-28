// Synchronous Program
// Synchronous progamming is a blocking content programming where program is run line by line. This Approach is used when we write a code that we wanted to run after the first one execute then we used this. 

// Asynchronous Program
// Asynchronous Programming is a non-blocking program that not run line by line means there is no requirement to execute the code one after second its work on the principle where which one completed the task first can be execute and the running code not block the others.

// This is the Example of synchronous programming

// const fs = require("fs");
// let text = fs.readFileSync("practice2.txt" , "utf-8");
// console.log(text);
// console.log("I am Jadugaar");

// But when we write the same code asynchronously then we get a intresting output
const fs2 = require("fs");
let text2 = fs2.readFile("practice2.txt" , "utf-8" , ((err , data)=>{
    console.log(data);
}));
// console.log(text2);
console.log("I am Jadugaar");
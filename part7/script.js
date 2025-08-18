const fs=require('node:fs')

//task : read content of notes.txt

console.log("Start of script")

//Synchornous operations are lnown as blocking operation

const contents =fs.readFileSync("notes.txt","utf-8")
console.log("contents",contents)  //This line blocks everything jab tak baaki opeartions na ho jye 
//so blocking opeartion may create problem 

//Async _Non bloacking

fs.readFile("notes.txt","utf-8",function (error,data) {
    if(error) console.log(error);
        else console.log("Content got",data);
});

console.log("End of script")
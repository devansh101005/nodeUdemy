//Modules 


//File system Module 

const fs =require("fs")  //This is built in module  
console.log(fs)

//getting content of a file 
const contents=fs.readFileSync("notes.txt","utf-8")

fs.writeFileSync("copy.txt","I want to write something ","utf-8")

console.log(contents)

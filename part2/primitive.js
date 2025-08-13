//Number 

let balance =10 //how to know its number 
console.log(typeof balance )

//another way to write number 

let anotherNumber =new Number(120)
console.log(anotherNumber)  //so this gives type of ....but not a good way to write 


//Boolean 

let isActive =true 

let isReallyActive =new Boolean(true)  


//null and undefined 
let firstName ;
console.log(firstName) //this will sat undefined 

let lastName=null
console.log(lastName)


//String 
 

let myString ="hello"
let myStringOne="hola"
let userName='hitesh'

//backticks 
let greetMessage=`Hello ${userName}`
console.log(greetMessage)  //known as string interpolation

let demoOne= `value is ${2*2}` //so we can do calculation too
console.log(demoOne);


//Symbol --uniquely identifies 
let sm1= Symbol()
let sm2=Symbol()
 console.log(sm1==sm2)  //false as js dont consider them same
 
 //see Symbool on mdn docs for more 




 

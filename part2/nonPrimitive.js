//objects

let userName={
    firstName:'Devansh',
    isLoggedIn:true,


};

//behind const and var the conceptis that howw the memeory space is used 
//if we write const instead of let while defining any object 
//that does not means ki uske andar ki cheeze change ni ki jaa sakti you can easily change them 


console.log(userName)
console.log(userName.firstName)

userName.firstName="Mr .H "
//by this first Nme ki vakue will be changed 

userName.lastName="Pandey"
//by this we can add valu too wo bhi bahar se 


console.log(typeof userName)


//how ton  access value from objevt if .(dot) ke bina karna ho to

console.log(userName["isLoggedIn"])  //use this method



// let today = new Date()
// console.log(today)

//to find date 

//Array

//Collection of things 
let heroes=["spiderman","shaktimaan","chodumaan","fucktimaan"]


//ek hi array mai ham different type of data enter ya store kar skte hain

console.log(heroes[0])  //wY TO ACCESS ARRAy

//type conversion

console.log(1+'1') //11
//js implicit conversion can be weird 

let isValue="2"
console.log(Number(isValue))

console.log(Number(null)) 















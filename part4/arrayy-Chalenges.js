//Declare an array name "teaFlavour" that contains strings "green tea", "black tea ","pplong tea"
//Access the first element ofthea rray and store it in a variable named "first tea"

let teaFlavours =['green tea','black tea','oolong tea']

let teaFl= new Array("green tea","black tea","oolong tea ")  //in this way array can also be initialised 

const firstTea=teaFlavours[0]
console.log(firstTea)


//You have an arraynamed teatypes containing herbal tea ,white tea and  manga tea 
//change the second elemnt of the array to jasmine tea

const teaTypes=["herbal tea","white tea","manga tea"]

teaTypes[1]="jasmine tea"

console.log(teaTypes)

//Declare a array named cityvisited conating mumbai, sydney
//add berlin using push method 

//there are two ways to add a element in array
let citiesVisited=["Mumbai","Sydney"]
//citiesVisited[2]="Berlin" //work only when we know length 
citiesVisited.push("Berlin")  //adds at end 
console.log(citiesVisited)


//you have an array named teaOrders with chai ,iced teaFl,matcha,earl grey

//Remove the last element of the array using pop and store it in a variable named 'lastOrder 

let teaOrders=["chai","iced tea","matcha","earlgrey"]
const lastOrder=teaOrders.pop();
console.log(teaOrders)
console.log(lastOrder)

//Create a soft copy of array

let popularTea=["green tea","oolong tea","chai"]

let softCopyTea=popularTea
popularTea.pop()
console.log(softCopyTea)
console.log(popularTea)  //here popping out will be done as soft copy bani hai

//Create a hard copy
let topCities =["Berlin","Singapour","New york"]
//2 ways to make hard copy 
//let hardCopy=[...topCities]  //This is spread operator lean more about it
let hardCopy=topCities.slice()
topCities.pop()
console.log(hardCopy) //no popping out will be done here



//Merging two arrays

let europeCity=["paris","Roma"]
let asianCities=["tokyo","Bnagkok"]
//let worldCities =europeCities+ asianCities  //tgis will not work in clesn way and give type of String
//let worldCities =[europeCity,asianCities]  //ye bhin ni chalega acce se 
let worldCities=europeCity.concat(asianCities)

console.log(worldCities)

//Checking element hai ki ni and then store 

let cityBucketList=["Kyoto","london","cape town","vancouket"]

let isLondonInList=cityBucketList.includes("london")
console.log(isLondonInList)















































const EventEmitter=require("events");

const eventEmitter =new EventEmitter();
eventEmitter.on("greet",(username) =>{
    console.log(`Hello ${username} welcome to event listener in node js`)
})
eventEmitter.once("pushnotify",()=>{
    console.log("This event will run only once")
})  //this eventemitter will be work only once 

const myListener=() => console.log("I am a test listener")
eventEmitter.on("test",myListener)
eventEmitter.emit("test")

// //Emit the event
// eventEmitter.emit("greet","hitesh")
// eventEmitter.emit("greet","chai")
// eventEmitter.emit("pushnotify")
// eventEmitter.emit("pushnotify")
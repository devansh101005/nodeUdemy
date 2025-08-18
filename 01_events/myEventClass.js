const EventEmitter =require("events")

class Chat extends EventEmitter{
    sendMessage(msg) {
        console.log(`mesaage sent ${msg}`)
        this.emit(`messageReceived`,msg)
    }

}
const chat =new  Chat() 
chat.on("messageReceived",(msg)=> {
    console.log(`new mesaage ${msg}`)
})

//trigger event 
chat.sendMessage("Hello Devansh")
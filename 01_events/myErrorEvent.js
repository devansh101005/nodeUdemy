const EventEmitter =require("events")
const eventEmitter =new EventEmitter()

EventEmitter.on('error',(err)=> {
    console.error(`Error is :${err.message}`)
})

eventEmitter.emit('error',new Error('Something went wrong'))
import EventEmitter from 'events'

//class creation
class MyEmitter extends EventEmitter { }
//object
const myEmitter = new MyEmitter();

let m=10
myEmitter.on('event',()=>{
    console.log(++m)
})

myEmitter.emit('event');

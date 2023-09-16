import EventEmitter from 'events';

//creating class
class MyEmitter extends EventEmitter { }

//creating object
const myEmitter = new MyEmitter();

//Example 1
//Register Event Listener
// myEmitter.on('event',()=>{
//     console.log('An event occured !');
// })
// //trigger event
// myEmitter.emit('event');
// myEmitter.emit('event');



//Example 2
  let m=0;
  myEmitter.on('event',()=>{
    console.log(++m);
  })
  //trigger event
 myEmitter.emit('event');
 myEmitter.emit('event');
 myEmitter.emit('event');


//Example 3
/*let m=0;
myEmitter.once('event',()=>{
   console.log(++m);
})*/
//trigger event
//myEmitter.emit('event');
//myEmitter.emit('event');






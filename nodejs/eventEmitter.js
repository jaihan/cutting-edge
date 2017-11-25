var events = require('events');
var eventEmitter =new events.EventEmitter();

var listen1 = function listen1(){
  console.log('listen1 executed.');
}

var listen2 = function listen2() {
  console.log('listen2 executed');
}

eventEmitter.addListener('connection', listen1);

eventEmitter.on('connection', listen2);

var eventListeners = require('events').EventEmitter.listenerCount(
  eventEmitter, 'connection');
  console.log(eventListeners+ "Listner (s) listening to connection event");


eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listen1);
console.log("Listner1 will not listen now.");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "Listner (s) Listening to connection event");

console.log('emitter ended.');

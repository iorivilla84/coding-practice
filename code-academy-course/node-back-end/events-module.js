// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// .on() and emit() needs to be working together to be able to call the listenerCallback
// function and pass the data to the front end
const myEmitter = new events.EventEmitter();
myEmitter.on('celebration', listenerCallback);
myEmitter.emit('celebration', 'junior developer now')


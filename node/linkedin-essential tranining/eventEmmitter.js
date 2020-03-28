const { EventEmitter } = require('events');

const emitter = new EventEmitter();
emitter.on('customEvent', (msg, name) => {
  console.log(`${name}: ${msg}`);
});
emitter.emit('customEvent', 'hello world', 'hamza');
emitter.emit('customEvent', 'thats pretty cool', 'ahmed');



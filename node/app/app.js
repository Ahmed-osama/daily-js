var Emitter = require('events');
var eventConfig = require('./config').events
var emtr = new Emitter();
var util = require('util');

class Person {
    constructor(name){
        this.name = name
        
        
    }
    greet(){
        this.emit('greet')
        console.log(`good work ${this.name}`)
    }
    

}
let person =  new Person('ahmed')
let person2 = new Person('osama')

util.inherits(Person,Emitter)
// emtr.on(eventConfig.GREET,()=>console.log('greetings'))
// emtr.on(eventConfig.GREET,()=>console.log('that was agreet'))
// emtr.on(eventConfig.GREET,person.greet.bind(person2))
// emtr.emit(eventConfig.GREET)
person2.emit(eventConfig.GREET)
var Emitter = require('events');
var eventConfig = require('./config').events
var emtr = new Emitter()
let person = {
    name : 'ahmed',
    greet(){
        console.log(`good work ${this.name}`)
    }
}
let person2 = {
    name : 'osama',
   
}
emtr.on(eventConfig.GREET,()=>console.log('greetings'))
emtr.on(eventConfig.GREET,()=>console.log('that was agreet'))
emtr.on(eventConfig.GREET,person.greet.bind(person2))
emtr.emit(eventConfig.GREET)
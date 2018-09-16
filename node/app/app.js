let Emmiter = require('events');
'use strict';
console.log(Emmiter)
class Person extends Emmiter{
    constructor(firstName, lastName){
        super()
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet(data){
        console.log(`hello ${this.firstName} ${this.lastName}`)
        this.emit('greet', data)
    }
}

var john  = new Person('john', 'snow');
john.on('greet', data => `john was greted ${data}`)
john.greet('awawaw');

var sansa  = new Person('sansa', 'stark')
sansa.greet();
'use strict';
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet(){
        console.log(`hello ${this.firstName} ${this.lastName}`)
    }
}

var john  = new Person('john', 'snow');
john.greet();
var sansa  = new Person('sansa', 'stark')
sansa.greet();
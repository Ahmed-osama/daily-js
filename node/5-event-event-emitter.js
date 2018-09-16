/*
    Event : is something that happned in our app that we can respond to
    system Events => c++ core => libuv
    custom events => js core => event emitter
    system events are wraped inside js module so it generates js events
    so js side is faking it 

    Event listener : a code that responds to an event
    magic string : string have special meaning in our code
    Object.creat

    util.inherites : creates shared prototype object between 2 objects
*/

let person = {
    firstName : '',
    lastName : '',
    greet(){
        return this.firstName + ' ' + this.lastName
    }
}


let john =Object.create(person)
john.firstName ='john',
john.lastName ='snow'
    
console.log(john.greet())

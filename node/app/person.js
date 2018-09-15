
/*
    inheritence : thats when one object gets access to
        properites and methods of another object.

    function constructors : functions used to construct objects
        and we do that by using the new keyword
    
    primitive : a type of data that represents a single value
        like : [number, string, boolean] any thing not an object
    
    
*/
let person = {
    firstName:"ahmed",
    lastName:"osama",
    greet:function(){
        console.log(`hellow ${this.firstName} ${this.lastName}`)
    }
}


function Person(firstName, lastName){
    this.firstName =firstName
    this.lastName =lastName
}
Person.prototype.greet = person.greet

let john = new Person('john', 'doe')
john.greet()
let judy = new Person('judy', 'mohamed')
judy.greet()
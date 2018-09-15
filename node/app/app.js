
/*
#there as global avilable keywords
    __dirname
    require
    exports
object and object litrels:
    name value pairs : name maps to value
    object : a collection of name value pairs
        sets in memory and points to other values
    object literal : {name: value, name2:value2, name3:{name4:value4}}

IIFE : immediatly invoked function expression
scope : where in code you have acess to a virable

*/
var name = 'john';
(function(){
    var name = 'jane';
    console.log(name)
}())
console.log(name)
console.log(__dirname)
console.log(__filename)
console.log(exports)
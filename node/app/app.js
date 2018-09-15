
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
json : js object notation , a standered for structuuring data thats inspired by javascript object literals

revealing module pattern : exposesing only the properties and  methods  you wanted via a returned object
- in node your code is alwayes wraped inside a dunction
that passes in 5 prams dirname, file name , require, exports, module
and it alwayes returns export

- require cashes modules if its already required before
*/
var greet = require('./greet/greet.1');
greet();
var greet2 = require('./greet/greet.2').greet
greet2()
var greet3 = require('./greet/greet.3')
greet3.greeting = 'changed hellow world !!!'
greet3.greet()
var greet3_2 = require('./greet/greet.3')
greet3_2.greet()
console.log(greet3 === greet3_2)

var greet4 = require('./greet/greet.4')
var grtr = new greet4()
grtr.greeting = 'greet 4 first use'
grtr.greet()

var grtr2 = new greet4()
grtr2.greeting = 'greet 4 second use'
grtr2.greet()
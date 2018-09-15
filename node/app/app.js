
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

in node your code is alwayes wraped inside a dunction
that passes in 5 prams dirname, file name , require, exports, module
and it alwayes returns export
*/

var greet = require('./greet/');
let {english,spanish } = greet;

english();
spanish();
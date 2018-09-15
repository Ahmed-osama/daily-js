/*
    module : a reusable block of code whose existence does not impact other code
    common js momdules : a standered for how modules should be structured
    first class functions : every thing you can do with other types you can do with functions
        passing them as arg, put them in a virablepass them in arrayes ..etc
    expression : a block of code that results in a value
        function expression is avilable because functions are firstclass
    invoke : running the function

*/

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
mutate : is to change
revealing module pattern : exposesing only the properties and  methods  you wanted via a returned object
- in node your code is alwayes wraped inside a dunction
that passes in 5 prams dirname, file name , require, exports, module
and it alwayes returns export

- require cashes modules if its already required before
- global api
- web server checklist
    -
*/

function greet(){
    console.log('hi')
}
function logGreeting(func){
    func()
}
logGreeting(greet);
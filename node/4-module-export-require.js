/*
    module : a reusable block of code whose existence does not impact other code
    common js momdules : a standered for how modules should be structured
    first class functions : every thing you can do with other types you can do with functions
        passing them as arg, put them in a virablepass them in arrayes ..etc
    expression : a block of code that results in a value
        function expression is avilable because functions are firstclass
    invoke : running the function

*/

function greet(){
    console.log('hi')
}
function logGreeting(func){
    func()
}
logGreeting(greet);
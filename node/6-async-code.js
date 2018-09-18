/*
    asynchronous: more than one process running simultaneously

    synchronous : one process executing at a time

    call back : a function we pass to other function which it will be assumed to be invoked inside the main function

    none blocking : doing other things w/o stopping your programme from running

    buffer : a temperoray holding spot for adata being moved from on place to another 
        gather some data and move it along [hel] l o

    stream : a sequnce of data made avilabel over time

    binary data : data stored in binary sets of 1s and 0s
        each one or zero is called a bit or binary digit
    
    character set : a representation of characters as numbers
        each char gets a number , unicode and ascii are character sets.

        h   e   l   l   o
        |   |   |   |   |       [in unicode]
       104 101 108 108 111
                                utf-8
        has 8 digits to represent the number in binary
    character encoding : how character are sotred in binary
    byte : 8 bits 10101100

    es6 typed arrays : 
    callback : a function passed to other function which we assume will be invoked at some point

    -------------------------

    systemEvents : c++ core -> libuv : deals with things happning in lower level
    libuv : has a queue [ , , , ,] and the event loop

*/
// var buff = new Buffer('hello')
// console.log(buff.toJSON())

var buffer = new ArrayBuffer(8) // 64 bits of data
var view = new Int16Array(buffer)
function greet(cb){
    console.log("hello")
    cb()
}
greet(console.log.bind(null, "cb cons"))
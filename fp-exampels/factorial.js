let factorial = (number, accumilator = 1) =>{
        if(number < 0) return;
        if(number === 0 ) return accumilator
        return factorial(number - 1 , accumilator * number)
}
//console.log(factorial(4))

let callOneByOne = funcs =>{
   if(funcs.length > 0){
       funcs[0]()
       funcs.splice(0,1)
       setTimeout(callOneByOne.bind(null, funcs),1000)
    }
}
callOneByOne([()=> console.log(1),()=> console.log(2),()=> console.log(3),()=> console.log(4),()=> console.log(5)])

let factorialArr = []
let loopArr = []
let factorial = (number) =>{
    
    if(number === 0) return;
    factorialArr.push(number)
    return factorial(number - 1)
}

function sadny(num){
    if(num > 0 ){
        console.log('s3dny')
        sadny(num-1)
    }
}
sadny(10)
let loopStartTime = (new Date()).getTime()
function loopPush(number){
    
    for(var i = number; i>=0;i--){
        loopArr.push(i)
    }
}


function powUsingLoop(x, n) {  
    var result = 1;  
    for (var i = 0; i < n; i++) {  
        result *= x;  
    }  
    return result;  
}  
  
function powUsingRecursion(x, n) {  
    if (n == 1) {  
        return x;  
    } else {  
        return x * powUsingRecursion(x, n - 1);  
    }  
} 

// console.time("Loop #1")
// powUsingLoop(8935,8935)
// console.timeEnd("Loop #1")
// console.time("recursion #2")
// powUsingRecursion(8935,8935)
// console.timeEnd("recursion #2")


// console.log(factorialArr, loopArr)
let callOneByOne = funcs =>{
   if(funcs.length > 0){
       funcs[0]()
       funcs.splice(0,1)
       setTimeout(callOneByOne.bind(null, funcs),1000)
    }
}
// callOneByOne([()=> console.log(1),()=> console.log(2),()=> console.log(3),()=> console.log(4),()=> console.log(5)])
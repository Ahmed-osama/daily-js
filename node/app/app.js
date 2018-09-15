var obj ={
    greet:'hello'
}
var prop = 'greet'
console.log(obj[prop])

//Array
var arr = []
arr.push(()=> console.log('hellow world 1'))
arr.push(()=> console.log('hellow world 2'))
arr.push(()=> console.log('hellow world 3'))

arr.forEach(i=> i())


// 1 - Refactor imperative code to a single composed expression using Box


let getCharFromNumberString = num =>{
    const trimmed = num.trim()
    const number = parseInt(trimmed)
    const nextNumber = number + 1
    return String.fromCharCode(nextNumber)
}
let box = x =>({
    map:f=>box(f(x)),
    fold: f=> f(x),
    inspect: ()=>`Box(${x})`
})

const getCharFromNumberString2 = str => box(str)
                                        .map(s=>s.trim())
                                        .map(s=>parseInt(s))
                                        .map(s=>s+1)
                                        .fold(x=> String.fromCharCode(x))
                                        
console.log( getCharFromNumberString2('65 '))
console.log('assert getCharFromNumberString : ', getCharFromNumberString('65 ') === getCharFromNumberString2('65 '))

// 2 - Refactor imperative code to a single composed expression using Box
cons applyDiscount = 
let capitalize = word => word.toUpperCase()
let humanize = arr => arr.join(" ")

let pipe = (...funs) => x => funs.reduce((v,f)=> f(v),x)
let doAtOnce = pipe(humanize,capitalize)
console.log(doAtOnce(['ahmed', 'osama']))
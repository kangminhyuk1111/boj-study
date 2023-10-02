let input = require("fs").readFileSync("1000.txt").toString()

let a = input.split('').sort()
let set = new Set(a)
let setArr = [...set]

const aCode = a.map((v,i)=> {
    
})

console.log(aCode)

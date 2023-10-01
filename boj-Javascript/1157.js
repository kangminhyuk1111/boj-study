let input = require("fs").readFileSync("1000.txt").toString()

let a = input.split('').sort()
let set = new Set(a)
let setArr = [...set]

for (let i = 0; i < setArr.length; i++) {
    for(let j = 0; j < a.length; j++){
        
    }
}

console.log(a)


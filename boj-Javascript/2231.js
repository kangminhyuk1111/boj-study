const input = require('fs').readFileSync("1000.txt").toString().trim()

let n = Number(input)
let sum = []

for(let i = 1; i <= input; i++){
    let iSlice = []
    for(let j = 0; j < String(i).length; j++){
        iSlice.push(String(i)[j])
    }

    let k = 0
    for(let j = 0; j < iSlice.length; j++){
        k+=Number(iSlice[j])
    }
    if(k + Number(iSlice.toString().replace(/,/g,"")) === n){
        sum.push(Number(iSlice.toString().replace(/,/g,"")))
    }
}

console.log(sum[0])
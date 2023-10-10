let input = require("fs").readFileSync("1000.txt").toString().trim().split('\n').map(x => (x.split(' ').map(Number)))

let currentNumber = input[0][1]
let result = 0
for(let i = 2; i < input [0][0]; i++){
    console.log(input[1][i-2] + input[1][i-1] + input[1][i])
}
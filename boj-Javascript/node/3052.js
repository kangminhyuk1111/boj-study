const input = require("fs").readFileSync("1000.txt").toString().split("\n");
let arr = []
for(let i = 0; i < input.length; i++){
    arr.push(Number(input[i]) % 42)
}
const set = new Set(arr)
console.log([...set].length)



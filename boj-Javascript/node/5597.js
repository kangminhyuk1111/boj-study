let input = require("fs").readFileSync("1000.txt").toString().trim().split("\n");

let range = []
for(let i=1; i<=30; i++){
    range.push(i)
}
input = input.map(x => parseInt(x))
let test = range.filter(x => !input.includes(x))

for(let i = 0; i<test.length; i++){
    console.log(test[i])
}
const input = require("fs").readFileSync("1000.txt").toString().split("\n");
const count = parseInt(input[0])

for(let i = 0; i < Number(input.length) - 1; i++){
    let test = input[i].split(' ')
    console.log(Number(test[0]) + Number(test[1]))
}


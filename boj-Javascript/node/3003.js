const fs = require("fs");
let input = fs.readFileSync("1000.txt").toString().split(" ")

let currentChessPawn = [1, 1, 2, 2, 2, 8]

const answer = currentChessPawn.map((v, i) => {
    return v - input[i]
})

console.log(answer.join(" "))


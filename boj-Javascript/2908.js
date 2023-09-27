let input = require("fs").readFileSync("1000.txt").toString().trim().split(" ")
function reverseString(str){
    return str.split("").reverse().join("")
}

let reverseA = reverseString(input[0])
let reverseB = reverseString(input[1])

console.log(parseInt(reverseA) > parseInt(reverseB) ? reverseA : reverseB)
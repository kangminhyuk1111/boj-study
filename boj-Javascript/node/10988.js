let input = require("fs").readFileSync("1000.txt").toString()

let a = input.slice(0, input.length / 2)

if (input.length % 2 === 0) {
    let b = input.slice(input.length / 2, input.length)
    console.log(a === b.split('').reverse().join('') ? 1 : 0)
} else {
    let b = input.slice(input.length / 2 + 1, input.length)
    console.log(a === b.split('').reverse().join('') ? 1 : 0)
}


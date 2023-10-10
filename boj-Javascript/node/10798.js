const input =
    require('fs').readFileSync("1000.txt")
        .toString()
        .trim()
        .split("\n").map(x => x.split(''))

let answer = ''

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        answer += input[j][i]
    }
}

console.log(answer)
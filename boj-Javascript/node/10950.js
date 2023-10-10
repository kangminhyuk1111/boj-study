let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = 0

for (let i = 1; i <= input[0]; i++) {
    answer += i
}

console.log(answer)





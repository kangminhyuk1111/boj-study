let input = require('fs').readFileSync(0).toString().split('\n');

const aDot = input[0]
const bDot = input[1]

if(aDot > 0 && bDot > 0) {
    console.log(1)
} else if(aDot > 0 && bDot < 0) {
    console.log(2)
} else if(aDot < 0 && bDot < 0){
    console.log(3)
} else if(aDot > 0 && bDot < 0) {
    console.log(4)
}
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

if(input[0] % 4 == 0){
    if(input[0] % 100 != 0 || input[0] % 400 == 0){
        console.log(1)
    } else {
        console.log(0)
    }
} else {
    console.log(0)
}
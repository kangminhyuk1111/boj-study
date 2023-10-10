const input = require('fs').readFileSync('1000.txt').toString().split(' ').map(x => Number(x));

let i = 0 // 시도 횟수
let a = input[0];
let b = input[1];
let v = input[2];
let result = 0 // 도착값
while (result <= v) {
    // i번째시도
    i++
    // 올라가고
    result += a
    if (result >= v) {
        console.log(i)
        break;
    } else {
        // 도착하지 않으면 계속 진행
        result -= b
    }
}
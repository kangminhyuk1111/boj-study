const input = require("fs").readFileSync("1000.txt").toString().trim().split("\n");
const resultArr = input[1].split(' ').map(item => Number(item)).sort((a, b) => a - b)
const maxNumber = resultArr[resultArr.length - 1]
let sum = 0
for(let i = 0; i < resultArr.length; i++){
    sum += resultArr[i]/maxNumber*100
}

console.log(sum/input[0])

// 세준이의 기말 최댓값 : M
// 이후 모든 점수를 점수/M*100 으로 수정


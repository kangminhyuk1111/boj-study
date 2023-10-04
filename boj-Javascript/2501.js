let [a,b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number)

let answer = []

for(let i = 1; i <= a; i++){
    if(a % i === 0){
        answer.push(i)
    }
}

if(answer.length < b){
    console.log(0)
} else {
    console.log(answer[b-1])
}


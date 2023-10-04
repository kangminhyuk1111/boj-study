let [n,m] = require("fs").readFileSync("1000.txt").toString().trim().split('\n').map(Number)

let answer = []
let sum = 0
for(let i = n; i < m; i++){
    if(isPrime(i) !== false){
        answer.push(i)
        sum += i
    }
}
function isPrime(x){
    if(x < 2){
        return false
    } else {
        for(let i = 2; i < x; i++){
            if(x % i === 0){
                return false
            }
        }
        return x
    }
}

if(answer.length){
    console.log(sum)
    console.log(answer[0]);
} else {
    console.log(-1)
}
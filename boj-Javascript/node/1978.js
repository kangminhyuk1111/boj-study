let input = require("fs").readFileSync("1000.txt").toString().trim().split('\n')

let count = input[0]
let testCase = input[1].toString().split(' ').map(Number)
let result = 0

for(let i = 0; i < count; i++){
    if(isPrime(testCase[i]) !== false){
        result++
    }
}

console.log(result)
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
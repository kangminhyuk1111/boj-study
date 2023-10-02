const input =
    require('fs').readFileSync("1000.txt")
        .toString()
        .trim()
        .split("\n")

const loopNum = input[0]
let answer = []

for(let i = 1; i <= loopNum; i++){
    if(input[i] != 0){
        answer.push(input[i])
    } else if(input[i] == 0) {
        answer.pop()
    }
}

let sum = 0
answer.forEach(x => {
    return sum+=Number(x)
})

console.log(sum)
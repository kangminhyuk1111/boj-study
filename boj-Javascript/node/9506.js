let input = require("fs").readFileSync("1000.txt").toString().trim().split('\n').map(Number)

input.pop()
for(let i=0; i<input.length; i++){
    let sum = 0
    let answer = []
    for(let j=1; j<input[i]; j++){
        if(input[i] % j === 0){
            answer.push(j)
            sum += j
        }
    }
    if(input[i] === sum){
        console.log(`${sum} = ${answer.toString().replace(/,/g," + ")}`)
    } else {
        console.log(`${input[i]} is NOT perfect.`)
    }
}
const input = require("fs").readFileSync("1000.txt").toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
    let answer = ''
    for(let j = 2; j <= Number(input[i][0])+1; j++){
        answer += `${input[i][j]}`
        console.log(answer)
    }
}



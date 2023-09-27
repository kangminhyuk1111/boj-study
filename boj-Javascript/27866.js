let input = require("fs").readFileSync("1000.txt").toString().trim().split('\n')

for(let i=1; i<=input[0]; i++){
    console.log(`${input[i].substr(0,1)}${input[i].substr(input[i].length -1,1)}`)
}

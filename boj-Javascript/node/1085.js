let input = require("fs").readFileSync("1000.txt").toString().trim().split('\n')

let answer = []

for(let i = 0; i < input[0]; i++){
    if(input[i].length === 1){
        stack(Number(input[i+1]))
    } else {
        stack(input[i+1].split(' ').map(Number))
    }
}
function stack(x){
    switch (x[0]){
        case 1:
            answer.push(x[1])
            break;
        case 2:
            if(answer.length > 0) {
                console.log(answer.pop())
                break;
            } else {
                console.log(-1)
                break;
            }
        case 3:
            console.log(answer.length)
            break;
        case 4:
            (!answer.length) ? console.log(1) : console.log(0)
            break;
        case 5:
            (answer.length) ? console.log(answer[answer.length - 1]) : console.log(-1)
            break;
    }
}
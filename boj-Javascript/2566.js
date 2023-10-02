const input =
    require('fs').readFileSync(
        "/dev/stdin"
    )
        .toString()
        .trim()
        .split("\n")
        .map((el) => el.split(" ").map((el) => Number(+el)))

const arr = []

for(let i = 0; i < input.length; i++){
    let maxNum = Math.max(...input[i])
    arr.push(maxNum)
}

let maxResult = Math.max(...arr)
console.log(maxResult)


for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === maxResult){
            console.log(i+1 ,j+1)
        }
    }
}

const input =
    require('fs').readFileSync(
        "1000.txt"
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

for(let i = 0; i < arr.length; i++){
    if(maxResult){

    }
}
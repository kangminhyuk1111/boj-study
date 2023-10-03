const input =
    require('fs').readFileSync("1000.txt")
        .toString()
        .trim()
        .split("\n")

const count = input[0]

for (let i = 1; i <= count; i++) {
    let answer = []
    let x = input[i]
    x = Number(x)
    if (x >= 25) {
        answer.push(Math.floor(x / 25))
        x = x % 25
    } else {
        answer.push(0)
    }
    if (x >= 10) {
        answer.push(Math.floor(x / 10))
        x = x % 10
    } else {
        answer.push(0)
    }
    if (x >= 5) {
        answer.push(Math.floor(x / 5))
        x = x % 5
    } else {
        answer.push(0)
    }
    if (x >= 1) {
        answer.push(Math.floor(x / 1))
        x = x % 1
    } else {
        answer.push(0)
    }
    console.log(answer.toString().replace(/,/g, " ").trim())
}


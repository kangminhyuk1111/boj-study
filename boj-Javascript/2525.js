let input = require('fs').readFileSync('1000.txt').toString().split('\n');

let a = input[0].split(' ')
let hour = parseInt(a[0])
let min = parseInt(a[1])
let addMin = parseInt(input[1])

if (min + addMin >= 60) {
    hour += ((min + addMin) / 60)
    min = (min + addMin) % 60
    if (hour >= 24) {
        hour = hour - 24
    }
    console.log(`${parseInt(hour)} ${parseInt(min)}`)

} else {
    console.log(`${parseInt(hour)} ${parseInt(min+addMin)}`)
}




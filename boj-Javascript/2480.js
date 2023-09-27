let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [x, y, z] = input

x = parseInt(x)
y = parseInt(y)
z = parseInt(z)

if (x === y && y === z) {
    console.log(10000 + (x * 1000))
} else if (x === y || x === z || y === z) {
    if (x === y || x === z) console.log(1000 + (x * 100))
    else if (y === z) console.log(1000 + (y * 100))
} else if (x !== y && y !== z && x !== z) {
    console.log(x * 100)
}



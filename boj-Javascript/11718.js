const fs = require("fs");
let input = fs.readFileSync("1000.txt").toString().split("\n")
input.forEach(x => {
    console.log(x)
})



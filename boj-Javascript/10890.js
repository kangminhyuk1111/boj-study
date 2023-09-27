const fs = require("fs");
let input = fs.readFileSync("1000.txt").toString()

let arr = new Array(26).fill(-1)

const val = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));

for(let i = 0; i < val.length; i++){
    for(let j = 0; j < input.length; j++){
        if(input[j] == val[i]){
            arr[i] = j
            break;
        }
    }
}

console.log(arr.toString().replace(/,/g," "))

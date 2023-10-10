let input = require("fs").readFileSync("/dev/stdin").toString()
let croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
function sol(input){
    for(let a of croatian){
        input = input.split(a).join('s')
    }
    return input.length
}

console.log(sol(input))


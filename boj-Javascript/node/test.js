let input = require("fs").readFileSync("1000.txt").toString().trim().split('\n')

let anagrams = [];
const len = parseInt(input[0]);

for (let i=1; i<=len; i++) {
    anagrams.push(input[i].split(" "));
}

for(let i = 0; i < anagrams.length; i++){
    let n = anagrams[i][0]
    let m = anagrams[i][1]

    validAnagram(n,m)
}

function validAnagram(str1,str2){

    if(str1.length !== str2.length){
        console.log(`${str1} & ${str2} are NOT anagrams.`)
    }

    let lookup = {};

    for(let val of str1){
        lookup[val] = (lookup[val] || 0) + 1
    }

    for(let val of str2){
        if(!lookup[val]){
            console.log(`${str1} & ${str2} are NOT anagrams.`)

        } else {
            lookup[val] -= 1;
        }
    }

    console.log(`${str1} & ${str2} are anagrams.`)
}
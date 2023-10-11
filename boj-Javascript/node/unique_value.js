

// 내가 푼 풀이
function countUniqueValues1(arr){
    let ans = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            ans++
        }
    }

    return ans
}

// 선생님 풀이
function countUniqueValues2(arr){
    let i = 0;

    for(let j = 0; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }

    return ++i
}
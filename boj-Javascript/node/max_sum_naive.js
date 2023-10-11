function maxSubarraySum(arr, num) {
  // 배열보다 num이 크면 null
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)



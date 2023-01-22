let arr = [0, 2, 4, -1, -3, 4, -5, 5];
let sum = 0;
let check = 0;

function sumOfSubArray(arr, check) {
  let map = new Map([]);
  sum = arr[0];

  for (i = 1; i < arr.length; i++) {
    sum += arr[i];

    if (sum == 0 || map.has(sum)) {
      console.log(map.get(sum) + 1, i); 
    //   console.log(map.get(sum) || 0, i); 
      
    } else {
      map.set(sum, i);
    //   map.set(sum, i+1);
    }
  }
}
sumOfSubArray(arr, check);;
// let arr = [0,2,4,-1,-3, 4, -5, 5];

// let requiredOutput = 0;
// const   preFix = [arr.length]
//      preFix[0] = arr[0];

//     for( let i=1; i<arr.length; i++){
//         preFix[i] = preFix[i-1] + arr[i];
//     }

// // console.log(preFix);
// for( let i=0; i<arr.length;i++){
//     for( let j=i+1; i<arr.length;j++){

//         if((preFix[j]-preFix[i]) === requiredOutput){

//             console.log("index", i+1, "==>", j)
//         }
//     }
// }
// var prefix = [arr[0]];
// for (i=1; i<arrLen; i++){
//     prefix[i] = prefix[i-1] + arr[i]
// }
// console.log(prefix);
// for (let i = 0; i < arrLen; i++) {
//     prefix[i] = sum;
// }
// console.log(prefix);
let arr = [2, -2, 4, -1, -3, 4, -5, 5];
let arrLen = arr.length;
let sum = 0;
let check = 0;
function sumOfSubArray(arr, check) {
  for (i = 0; i < arrLen; i++) {
    sum = 0;
    for (j = i; j < arrLen; j++) {
      sum += arr[j];
      if (sum === check) {
        console.log("index", i, "==>", j);
      }
    }
  }
}
console.log(sumOfSubArray(arr, check));

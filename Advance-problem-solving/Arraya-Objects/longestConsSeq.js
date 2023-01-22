let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6];
let result = [];
let tempRes = [];

sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);
// [3, 4, 5, 6, 9, 10, 21, 35, 88];
function longestConsSeq(sortedArr) {
  tempRes = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      tempRes.push(arr[i]);
    } else {
      if (tempRes.length > 1)  result.push(tempRes);
        tempRes = [arr[i]];
          }
  }
  console.log(result);
  console.log(result.sort((a,b)=>b.length-a.length)[0].length);
}
longestConsSeq(arr);

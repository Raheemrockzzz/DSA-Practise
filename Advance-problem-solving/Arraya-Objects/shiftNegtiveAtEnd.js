let arr = [-5,3,-4, 88, -9, -10, 21, 5,6 ];
let positiveNum = [];
let negativeNum = [];


for(let i=0; i<arr.length; i++){
    if(arr[i]>0){
        positiveNum.push(arr[i])
    }
    else{
        negativeNum.push(arr[i])
    }
}
console.log(positiveNum);
console.log(negativeNum);
let result = [...positiveNum, ...negativeNum]
console.log(result);

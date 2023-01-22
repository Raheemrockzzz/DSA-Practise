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
var arr = [0,2,4,-1,-3,4,-5,5];
var arrLen = arr.length;
var prefix = [arr[0]];
// for (i=1; i<arrLen; i++){
//     prefix[i] = prefix[i-1] + arr[i]
// }
// console.log(prefix);
let sum=0; 
for(let i=0; i<arrLen; i++){
    sum+=arr[i];
    prefix[i] = sum;
}
console.log(prefix);

for (i=0; i<arrLen; i++){
    for(j=i+1; j<arrLen; j++){
        if(prefix[j] - prefix[i] === 0){
            console.log("index", i+1, "==>", j)
        }

    }
}
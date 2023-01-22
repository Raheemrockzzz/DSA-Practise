let str = "unacademy";
let char = "a";
// let splitStr=  str.split();
// console.log(splitStr);
let count=0;
for (i=0; i<=str.length;i++)
{
    if(str[i]===char){
        // let count = 0;
        count = count+1;
    }
    else {
        continue;
    }
}
console.log(`the number of  characters in str is ${count}`);
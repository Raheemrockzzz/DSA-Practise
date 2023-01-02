let num=123;
let rem=0;
let sum=0;
while(num>0)
 {
rem=num%10;
num=parseInt(num/10);
sum=sum+rem;
}
console.log(sum);


let sum1,rem1=0;

for(let n=1234; n>0;parseInt(n/10)){
    rem1=n%10;
    sum1=sum1+rem1;
}
console.log(sum1);
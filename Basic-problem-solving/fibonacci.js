let a=0;
let b=1;
let n=10;
let series="";
series=series+a+", ";
series=series+b+", ";
for(let i=3;i<=n;i++)
{
    let c=a+b;
    if(i==n){
        series=series+c;
        break;
    }
    series=series+c+", ";
    a=b;
    b=c;
    
}
console.log(series);
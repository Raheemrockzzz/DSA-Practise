
function primeNum(n)
{
    for(let i=2;i<n;i++)
    {
    if(n%i==0)
    {
        return false;
    }
    
    }
    return true;
}
const n=50;
let output="";
for(let i=2;i<n;i++)
{
    if(primeNum(i)==true)
    {
    
        output=output+i+" ";
    }
}
console.log(output);
let pattern;
let rows=5;
for(let i=1; i<=rows;i++)
{
    pattern="";
    for(let space=1;space<=(rows-i);space++){
        pattern=pattern+" ";
    }
    for(j=1; j<=(2*i-1);j++)
    {
        pattern=pattern+"*";
    }
    console.log(pattern);
}
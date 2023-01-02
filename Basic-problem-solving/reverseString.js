const reverseString=(str)=>{
    let update_string="";
for(let i=str.length-1;i>=0;i--){
    update_string+=str[i];
}
return update_string;
}
let str="hey all"; 
let output=reverseString(str);
console.log(output);
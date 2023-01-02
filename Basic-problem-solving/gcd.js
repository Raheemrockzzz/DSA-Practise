let num1=38;
let num2=5;
let hcf_value;
for(let i=1; i<=num1 && i<=num2; i++){
    if (num1%i==0 && num2%i==0) {
        hcf_value=i;
    }
}
console.log(hcf_value);
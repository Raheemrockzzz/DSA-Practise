let num = 407;
let rem = 0;
let sum = 0;
let temp=num;
while (temp > 0) {
    rem = temp % 10;
    temp = parseInt(temp / 10);
    sum = sum + (rem * rem * rem);
}
if (num == sum) {
    console.log(`${num} is armstrong number`);
}
else {
    console.log(`${num} is not a armstrong number`);

}
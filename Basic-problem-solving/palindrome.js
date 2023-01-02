let num = 999;
let rem = 0;
let rev = 0;
let temp = num;
while (temp > 0) {
    rem = temp % 10;
    temp = parseInt(temp / 10);
    rev = (rev*10) +  rem;
}
if (num == rev) {
    console.log(`${num} is palindrome number`);
}
else {
    console.log(`${num} is not a palindrome number`);

}
numbers=[1,2,3,4,5,6,7];

mapReturn = numbers.map((num)=>{
    return num*2;
})

foreachReturn = numbers.forEach((num) => {
    return num*2;
});
console.log(mapReturn);
console.log(foreachReturn);
console.log(numbers);
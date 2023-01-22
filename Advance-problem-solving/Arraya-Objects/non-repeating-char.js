function nonRepeatingChar (str){
    let obj = {};
    for(let item of str){
        if(obj[item]){
            obj[item]++;
        }
        else{
            obj[item] = 1;
        }
    }
    
    console.log(obj)
    for(let item in obj){
        if (obj[item]==1){
            // console.log(`the  non repeating character in the string is ${item}`)
            return item; 
        }
    }

}
console.log(nonRepeatingChar("unacademy"));
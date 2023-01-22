// [ 00 01 02
//   10 11 12
// //   20 21 22 ]
let word = ["data","atad", "number", "tada", "adat", "bernum" ];
console.log(word);
let sortedWord = word.map((x)=>{
    return x.split("").sort().join("");
})
console.log(sortedWord);
let converted = sortedWord.sort();
console.log(converted);

// // anagram with sorting 
// var result = ["data", "atad", "number", "tada", "adat", "bernum"].map(x => {
//     return x.split("").sort().join("");
// });

// result.sort();

// // anagram logic to be implemented with Hash concept
// {
//     'aadt': ['data', 'atad', 'tada', 'adat'],
//     'bemnru': ['number', 'bemnru']
// }
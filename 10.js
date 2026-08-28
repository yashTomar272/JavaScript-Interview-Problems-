//Find Maximum Number
let arr=[1,5,3,7,8,9,2,4]
console.log(Math.max(...arr));


//DSA
let largest=arr[0]
for(let ch of arr){
    if(ch>largest) largest=ch
 }
 console.log(largest);
 
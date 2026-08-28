//Remove Duplicates from Array

let arr=[1,2,2,3,4,4,5,6,7,8,8]
let set=new Set(arr)
console.log(set);

//DSA
let unique=[]
for(let ch of arr){
    if(!unique.includes(ch)){
        unique.push(ch)
    }
}
console.log(unique);

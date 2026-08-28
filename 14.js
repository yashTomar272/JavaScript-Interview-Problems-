//Find Missing Number
let arr=[1,2,4,5]
let Missing=0
for(let i=0;i<arr.length;i++){
    if(i!==arr[i]) Missing=i
}
console.log(Missing);
//DSA
let set=new Set(arr)
for(let i=1;i<arr.length;i++){
    if(!set.has(i)){
        console.log(i);
        break
        
    }
}

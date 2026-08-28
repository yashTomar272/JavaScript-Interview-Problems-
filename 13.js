//Chunk Array
let arr=[1,2,3,4,5],k=2

let result=[]
for(let i=0;i<arr.length;i+=k){
    result.push(arr.slice(i,i+k))
}
console.log(result);

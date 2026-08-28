//Find Intersection
let arr1=[1, 2, 3]
let arr2= [2, 3, 4]

function funcName(arr1,arr2){
let map=new Map()
let arr=[]
for(let i=0;i<arr1.length;i++)
{
    map.set(arr1[i],i)
}
for(let ch of arr2){
    if(map.get(ch)) arr.push(ch)
}
return arr
}
console.log(funcName(arr1,arr2));

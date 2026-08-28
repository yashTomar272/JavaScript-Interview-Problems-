//Two Sum Problem
//Two Pointer
let arr=[2, 7, 11, 15], target=9

function functionName(arr) {
    arr=arr.sort((a,b)=>a-b)
let i=0
let j=arr.length-1
  while(i<j){
    let sum=arr[i]+arr[j]
    if(target==sum) return [arr[i],arr[j]]
    else if(sum<target) i++
    else j--
}
}

console.log(functionName(arr))

//HasMap

function MapFunc(arr,target) {
  let map=new Map()
for(let i=0;i<arr.length;i++){
    let diff=target-arr[i]
    if(map.has(diff)){
       return [diff,arr[i]]
    }else{
 map.set(arr[i],i)
    }
}
}

console.log(MapFunc(arr,target))
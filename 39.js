//Most Frequent Element

let arr=[1, 3, 2, 3, 3, 1]
function functionName(arr) {
    let max=0
    let result
  let map=new Map()
   for(let ch of arr){
    map.set(ch,(map.get(ch)||0)+1)
   }
for(let [key,value] of map){
if(value>max){ 
    max=value
result=key
}
}
return result
}

console.log(functionName(arr))
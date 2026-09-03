//Quick Sort
let arr=[5, 3, 8, 4, 2]
function functionName(arr) {
  if(arr.length<=1) return arr
  let left=[]
  let right=[]
   let pivot = arr[arr.length - 1];
   for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot) left.push(arr[i])
        else right.push(arr[i])
   }
   return [...functionName(left),pivot,...functionName(right)]
}

console.log(functionName(arr))
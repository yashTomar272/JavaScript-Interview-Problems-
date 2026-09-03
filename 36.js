//Bubble Sort

let arr=[5, 3, 8, 4, 2]
function functionName(arr) {
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
  }
  return arr
}

console.log(functionName(arr))
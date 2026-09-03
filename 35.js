//Binary Search

let arr=[10,20,30,40,50,60,70,80,90],target=20
function functionName(arr,target) {
    let left=0
    let right=arr.length-1
    while(left<=right){
        let midd=Math.floor((left+right)/2)
        if(arr[midd]===target) return midd
        else if(arr[midd]<midd) left=midd+1
        else right=midd-1
    }
  
}

console.log(functionName(arr,target))
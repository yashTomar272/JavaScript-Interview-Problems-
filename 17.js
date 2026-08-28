//Move Zeros to End
let arr =[0, 1, 0, 3, 12]

function funcName(arr){
let nonZero=arr.filter(num=>num!==0)
let Zero=arr.filter(num=>num==0)
return [...nonZero,...Zero]
}
console.log(funcName(arr));

//Two pointer

function TwoPointer(arr) {
  let i=0
  let j=arr.length-1
  while(i<j){
     while (i < j && arr[j] === 0) {
            j--;
        }
    if(arr[i]==0){
        [arr[j],arr[i]]=[arr[i],arr[j]]
        
        j--
    }
    i++
  }
  return arr
}

console.log(TwoPointer(arr))

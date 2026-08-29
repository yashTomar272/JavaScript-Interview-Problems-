// Count Digits

let num =12345
function functionName(num) {
  let str=String(num).length
return str
}

console.log(functionName(num))

//Basic Iteration

function CountDigit(num) {
  let Count=0
  while(num>0){
    num=Math.floor(num/10)
    Count++
  }
  return Count
}

console.log(CountDigit(num))
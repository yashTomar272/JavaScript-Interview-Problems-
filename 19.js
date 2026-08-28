//Fibonacci Sequence
 function functionName(num) {
  let a=0
  let b=1
  for(let i=0;i<num;i++){
    [a,b]=[b,a+b]
  }
  return a
 }
 
 console.log(functionName(7))
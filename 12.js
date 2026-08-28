//Flatten Array
let arr=[1,[2,[3,[4]]]]
console.log(arr.flat(4))

//DSA

function FlateArr(arr) {
    let arrr=[]
  for(let ch of arr){
    if(!Array.isArray(ch)){
        arrr.push(ch)
    }else{
       arrr.push( ...FlateArr(ch))
    }
  }
  return  arrr
}

console.log(FlateArr(arr))
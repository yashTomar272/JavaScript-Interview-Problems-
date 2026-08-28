//Longest Word

let str="The quick brown fox"

let strr=str.split(" ").reduce((long,next)=>{
    return next.length>long.length?next:long
})
console.log(strr);
//Without reduce
let strrr=str.split(" ")
let long=""
for(let n of strrr){
    if(n.length>long.length){
long=n
    }
}
console.log(long);

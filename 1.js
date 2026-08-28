//Reverse a String
let str="hello"
let strr=[...str].reverse().join("")
console.log(strr)

// DSA
let strrr=str.split("")
let i=0
let j=strrr.length-1
while(i<j){
    [strrr[i],strrr[j]]= [strrr[j],strrr[i]]
    i++
    j--
    
}
console.log(strrr.join(""))
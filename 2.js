//Check Palindrome
let str="mam"
let strr=[...str].reverse().join("")
console.log(str==strr)
// DSA
let strrr=str.split("")
let i=0
let j=strrr.length-1
while(i<j){
    [strrr[i],strrr[j]]= [strrr[j],strrr[i]]
    i++
    j--
    
}
console.log(strrr.join("")==str)
//Count Vowels
let str="hello world"
let vowels="aeiou"
let strr=str.split("")
let Count=0
console.log(strr);
let i=0
while(i<strr.length){
    if(vowels.includes(strr[i])) Count++
    i++
}
console.log(Count)

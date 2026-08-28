//Capitalize First Letter
let str="hello word"
console.log(str.charAt(0).toUpperCase()+str.slice(1))

let word=str.split(" ")
for(let i=0;i<word.length;i++){
    word[i]=word[i][0].toUpperCase()+word[i].slice(1)
}
console.log(word.join(" "))
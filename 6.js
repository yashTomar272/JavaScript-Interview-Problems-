//Remove Duplicates from String
let str="hello"
let strr=new Set(str)
console.log([...strr].join(""))

//without Set
let unique=[]
let strrr=str.split("")
for(let n of strrr){
    if(!unique.includes(n)){
        unique.push(n)
    }
}
console.log(unique.join(""))

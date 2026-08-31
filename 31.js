// Promise.all Implementation

function PromiseAll(promeses){
    return new Promise((resolve, reject) => {
let result=[]
let count=0

promeses.forEach((p,i)=>{
Promise.resolve(p)
.then(value=>{
    result[i]=value
    count++
    if(count===promeses.length){
        resolve(result)
    }
})
.catch(reject);
})
})
}
let p1=Promise.resolve(10)
let p2=new Promise(resolve=>{
    setTimeout(()=>resolve(20),1000)
})
let p3=Promise.resolve(30)

PromiseAll([p1,p2,p3])
.then(result=>console.log(result))
.catch(error=>console.log(error))
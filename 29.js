// Delay Function

function delay(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
  
}
async function test(){
console.log("start")
await delay(1000)
console.log("end aafter 1 sec")
}
test()


//simple settiomeout

function delayFun(){
    setTimeout(()=>{
        console.log("hello after 2 sec");
        
    },1000)
}
delayFun()
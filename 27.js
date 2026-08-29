//Get Nested Property
let obj = {
    name: "Yash",
    address: {
        city: {
            name: "Delhi"
        }
    }
};
function functionName(obj,path) {
  let keys=path.split(".")
  let current=obj
   
  for(let key of keys){
    if(current==null) return undefined
    current=current[key]
  }
  return current
}

console.log(functionName(obj,"address.city.name"))


//Basic
console.log(obj.address.city.name);

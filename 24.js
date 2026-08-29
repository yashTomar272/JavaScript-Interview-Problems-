//Deep Clone Object

let obj1 = {
    name: "Yash",
    address: {
        city: "Delhi"
    }
};

let obj2=JSON.parse(JSON.stringify(obj1))
console.log(obj1);
console.log(obj2);

// Better with structuredClone

let obj=structuredClone(obj1)
console.log(obj);



//Merge Objects
let obj1 = {
    name: "Yash",
    address: {
        city: "Delhi"
    }
};

let obj2 = {
    age: 22,
    address: {
        country: "India"
    }
};
let obj={...obj1,...obj2}

console.log(obj);


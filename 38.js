//Find Unique Values

const findUnique = arr => arr.filter((val, idx) => arr.indexOf(val) === 
idx);
console.log(findUnique([1, 2, 2, 3, 4, 4]));
//Group By Property
const groupBy = (arr, key) => arr.reduce((acc, obj) => {
const group = obj[key];
acc[group] = acc[group] || [];
acc[group].push(obj);
return acc;
}, {});
const data = [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 
'banana'}];
console.log(groupBy(data, 'type'));

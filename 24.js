var flowers = new Map();
var key = 'rose', other = {};

flowers.set(key, "red");
flowers.set(other, 'not_available');

// console.log(flowers.get(other))
console.log(flowers.get(key)); // red
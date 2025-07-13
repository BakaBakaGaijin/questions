var a = 'test';
var b = String('test'); // function String returns primitive
var c = new String('test'); // creates object-wrapper

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a.valueOf()); // valueOf returns primitive
// console.log(c.valueOf());
// console.log((42.0).valueOf());

// console.log(typeof a); // string
// console.log(typeof b); // string
// console.log(typeof c); // object

// console.log(a === c); // false

// console.log(b === c); // false

// console.log(a == b); // true

// console.log(a === b); // true

// console.log(b == c); // true. when == calls valueOf();

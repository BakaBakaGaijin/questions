// - [ ] For an object of type object, the value of its constructor property is null.
// false
const obj = Object();
console.log(typeof obj);
// console.log(obj.constructor); // [Function: Object]

// - [ ] The constructor property is equivalent to the prototype property.
// false. constructor and prototype are different things
// const obj = {};
// console.log(obj.constructor); // [Function: Object]
// console.log(obj.prototype); // undefined

// - [ ] The constructor property is a read-only property.
// false
// const obj = {};
// obj.constructor = () => {
//     console.log("No, I'm not a read-only property");
// };
// obj.constructor();

// - [ ] The constructor property of an object is a reference to the function used to create and initialize the object.
// true
// const obj = {};
// console.log(obj.constructor === Object); // true

// - [ ] The value of a literal string's constructor property is null.
// false
// console.log('hello'.constructor); // [Function: String]

// what is countructor. Why it's changing. Why the type of cunstructor is changing

// function drinkingBeer() {}
// console.log(drinkingBeer);

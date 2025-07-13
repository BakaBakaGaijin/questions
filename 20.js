var func1 = () => { 
    prop1: '1' + '1' 
}; // returns nothing
console.log(typeof func1)
var obj1 = func1(); // default variable value is undefined
console.log(obj1);

const str = 'Hello, how do you do?';

// it works
// const result = str.search('do'); // this method gets a regular expression and returns index of first match. If no match was found returns -1

// it works
// const result = str.lastIndexOf('do', 14);

// wrong answer
// const result = str.lastIndexOf("do"); // gets 18

// wrong answer
const result = str.indexOf('do', 19); // gets -1. If position argument more than length of the string if searchs nothing

// it works
// const result = str.indexOf("do");

console.log(result);

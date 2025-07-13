// 1 works good
// function square(x) {
//     return x * x;
// }

// export default square;

// 2
// default export function square(x) { // wrong syntax: "default" should be after "export". Will get SyntaxError
//     return x * x;
// }

// 3
// default export function (x) {
//     return x * x; // same as above
// }

// 4 works good
// export default function (x) {
//     // it's an anonymous function. It hasn't hoisting
//     return x * x;
// }

// 5 works good
// export default function square(x) {
//     return x * x;
// }

var gg = 1.5;
var hh = 0.2;
var x = Math.round((gg % hh) * 100) / 100; // % is a Remainder
// console.log(gg % hh); // ~0.1 (0.09999999999999992)
// console.log((gg % hh) * 100); // ~ 10 (9.999999999999993)
// console.log(Math.round((gg % hh) * 100)); // 10
// console.log(x); // 0.1

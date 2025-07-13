var a = Array.from('abracadabra');
var items = a.entries();
var count = 0;

// console.log(a); // [ 'a', 'b', 'r', 'a', 'c', 'a', 'd', 'a', 'b', 'r', 'a']
// console.log(items); // Object [Array Iterator] {}

for (let i of items) {
    // console.log(i);
    // [ 1, 'b' ]
    // [ 2, 'r' ]
    // [ 3, 'a' ]
    // [ 4, 'c' ]
    // [ 5, 'a' ]
    // [ 6, 'd' ]
    // [ 7, 'a' ]
    // [ 8, 'b' ]
    // [ 9, 'r' ]
    // [ 10, 'a' ]
    // console.log(i[0]); // shows indexes from 0 to 10
    // console.log(i[0].value); // shows undefined
    // 1 wrong answer
    // if (i[0].value === 'b') {
    //     // i[0].value is always undefined
    //     count++;
    // }
    // 2 works good
    // if (i[1] === 'b') {
    //     count++;
    // }
    // 3 wrong answer
    // console.log(i.value); // is always undefined
    // console.log(i.hasValue); // is always undefined
    // if (i.hasValue && i.value === 'b') {
    //     count++;
    // }
    // 4 will get a TypeError bacause items has no "value" method
    // if (items.value() === 'b') {
    //     count++;
    // }
    // 5 works wrong because items.next().value is array. Not a string
    // if (items.next().value === 'b') {
    //     count++;
    // }
}

console.log(count); // expects 2

// const myIterator = {
//     next() {},
//     [Symbol.iterator]() {
//         return this;
//     },
// };

// const obj = {};

// for (let smth of myIterator) {
//     console.log('myIterator`s ', smth);
// }

// for (let smth of obj) {
//     console.log('obj`s ', smth);
// }

// const aGeneratorObject = (function* () {
//     yield 1;
//     yield 2;
//     yield 3;
// })();

// console.log(typeof aGeneratorObject.next);

// console.log(typeof aGeneratorObject[Symbol.iterator]);

// console.log(typeof aGeneratorObject[Symbol.iterator]() === aGeneratorObject);

// function* gen() {
//     yield* ['a', 'b', 'c'];
// }

// console.log(gen().next());

// const [a, b, c] = new Set(['a', 'b', 'c']);
// console.log(a);
// console.log(b);
// console.log(c);

const obj = {
    [Symbol.iterator]() {
        let i = 0;

        return {
            next() {
                i++;

                console.log('Returning', i);

                if (i === 3) {
                    return {
                        done: true,
                        value: i,
                    };
                }

                return {
                    done: false,
                    value: i,
                };
            },
            return() {
                console.log('Closing');
                return { done: true };
            },
        };
    },
};

// const [a] = obj;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // undefined. because unreachable
// console.log(d);

// const [b, c, d] = obj;

for (const b of obj) {
    break;
}

function* gen() {
    try {
        yield doSomething();
        yield doSomethingElse();
    } finally {
        cleanup();
    }
}

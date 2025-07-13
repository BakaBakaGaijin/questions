console.log('start');

const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('success');
    // }, 1000);

    setTimeout(() => {
        reject('failed');
    }, 1000);
});
// .then((value) => {
//     console.log(value);
// })
// .catch((reason) => {
//     console.log(reason);
// });

// 1 // We can immediately say that this is not what we need, because we require error handling based on the description — and this implementation doesn't include it.
// here is an interesting point: this code is marked in red. Because catch is a reserved word
// promise.then(
//     (catch) => console.log(catch)
// )
// if we change catch to smth else it will not be marked in red
// promise.then((qwer) => console.log(qwer));

// 2 here we throw to catch not a handler, but called function
// promise.then().catch(console.log());
// what here happens:
// 1) console log calls immediatly and returns undefined
// 2) when catch triggers it has an undefind as an argument and trhow a error

// 3 it works according the description
// promise.then(null, (e) => console.log(e));
// it looks a few weird, but it's the same as if we used catch

// 4 here we handle both
// promise.then(
//     (result) => console.log(result),
//     (error) => console.log(error)
// );

// 5 works good
promise.catch(console.log);

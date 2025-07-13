// class Cow {}

// const dottedCow = new Cow();

// console.log(dottedCow.amountOfMilk);

// dottedCow.amountOfMilk = 25;

// console.log(dottedCow.amountOfMilk);

// class Cow {
//     constructor(name) {
//         this.name = name;
//     }

//     setName(name) {
//         this.name = name;
//     }
// }

// const dottedCow = new Cow('Buryonka');
// console.log(dottedCow.name);
// dottedCow.setName('Zorka');
// console.log(dottedCow.name);

// class Cow {
//     constructor(name) {
//         this._name = name;
//     }

//     get name() {
//         return `Great ${this._name}`;
//     }
// }

// const dottedCow = new Cow('Buryonka');
// console.log(dottedCow.name);

class Cow {
    constructor(name) {
        this._name = name;
    }

    set name(cowName) {
        this._name = cowName;
    }

    get name() {
        return this._name;
    }
}

console.log(Cow.constructor);

// const dottedCow = new Cow('Buryonka');
// console.log(dottedCow.name);
// dottedCow.name = 'Zorka';
// console.log(dottedCow.name);

// let propBar = 'bar1';
// let b2 = 'bar2';

// class Class1 {
//     set [propBar](val) {
//         // here we say, that when someone will try to set value to parameter bar1, we will handle it by this function
//         this.value = val;
//     }
// }

// let class2 = new Class1();
// console.log(class2.value); // at this time we have no value parameter in our class, but it returns undefined

// class2.bar1 = b2; // we set property bar1 value bar2 by setter
// console.log(class2.value);

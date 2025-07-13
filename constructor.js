function ConstructorName(param1) {
    this.property1 = param1;

    this.methodName = function () {
        console.log('adsf');
    };
}

const obj = new ConstructorName('adsf');
console.log(obj);

const obj2 = new ConstructorName();
console.log(obj2);

// const obj3 = ConstructorName();
// console.log(obj3);

const obj4 = Number();
console.log(obj4);

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

const person1 = new Person('firstName1', 'lastName1', 21);

// 1 works good
// Person.prototype.display = function () {
//     console.log(this.firstName + ' ' + this.lastName);
// };

// 2 will get a SyntaxError. Here is smth strange: create a display object property with wrog statement
// Person.display = {
//     console.log(this.firstName + ' ' + this.lastName);
// };

// 3 will get a TypeError, because we are trying to set property display to undefind (add)
// console.log(typeof Person.add); // undefined
// Person.add.display = function () {
//     console.log(this.firstName + ' ' + this.lastName);
// };

// 4
// Person.display = function () {
//     console.log(this.firstName + ' ' + this.lastName);
// };

// person1.display(); // will get a TypeError, because we added a static method just for Person function. Not for its insatances
// Person.display(); // it will work, but default values is undefind
// Person.display.call(person1); // this way will work good

// 5
// Person.prototype.display = { // same as 2th variant
//     console.log(this.firstName + ' ' + this.lastName);
// };

const person2 = new Person('firstName2', 'lastName2', 22);

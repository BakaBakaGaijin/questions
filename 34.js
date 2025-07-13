function generate(seed) {
    var private = seed; // private word is reserved so, our code will fall with SyntaxError
    return function (param) {
        private += seed;
        return private + param;
    };
}

var a = generate(1);
var b = generate(2);
var c = a(1) + a(2) + b(3) + b(4);

console.log(c);

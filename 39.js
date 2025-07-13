var ch1 = 'b';
var ch2;

switch (ch1) {
    case 'a':
        ch2 = '1';
        break;
    case 'b': // passes
        ch2 = '2';
    case 'c': // previous case hasn't break, so will be "fallthrough" that means that case "c" will be alsa passed
        ch2 = '3';
        break; // exit here
    default:
        ch2 = '4';
}

console.log(ch2); // 3

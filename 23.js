// // https://zh.javascript.info/arraybuffer-binary-arrays

// // tBuffer contains 12 16-bit integers
const tBuffer = new ArrayBuffer(12 * 2); // 2 byte by 12 value = 24 byte
// console.log("tBuffer:", tBuffer);

// 1 works 
// let int16view = new Int16Array(tBuffer);

// for (let i = 0; i < int16view.length; i++) {
//     console.log("i:", i, " , value:", int16view[i]);
// }

// 2 won't work, because we need prepare buffer by some typedArray
// for (let i =  0; i < tBuffer.byteLength; i + 2) {
//     console.log("i:", i, " , value:", tBuffer[i]);
// }

// 3 won't work, because we need prepare buffer by some typedArray
// for (let i =  0; i < tBuffer.length; i++) {
//     console.log("i:", i, " , value:", tBuffer[i]);
// }

// 4 won't work, because we need prepare buffer by some typedArray
// for (let i =  0; i < tBuffer.byteLength; i++) {
//     console.log("i:", i, " , value:", tBuffer[i]);
// }

// 5 works bad
// let uInt16view = new Uint16Array(tBuffer);

// for (let i = 0; i < uInt16view.length; i++) {
//     console.log("i:", i, " , value:", uInt16view[i]);
// }
var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
var letters = ['a', 'b', 'c' , 'd' , 'e' , 'f' , 'g' , 'h']
var myArray = [numbers, letters, numbers, letters, numbers, letters, numbers, letters];

for (var i = 0, j = 7; i <= j; i++, --j) {
    console.log ('myArray[' + i + '] [' + j + ']=' + myArray [i] [j]) ;
};

// 0 7
// myArray['0'] ['7']=8

// 1 6
// myArray['1'] ['6']=g

// 2 5
// myArray['2'] ['5']=6

// 3 4
// myArray['3'] ['4']=e
// no matter, because just 1 variant fits us

// 4 3 not works
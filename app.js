console.log('I am Connected')

// Demo - 1
/*
// ==== basic loop ==== \\

for (let i = 0; i < 10; i++) {
    console.log(`this is i = ${i}`);
}


// ==== infinate loop -- VERY BAD!!! ==== \\
for (let i = 11; i > 10; i++) {
    console.log(`this is i = ${i}`);
}

// ==== while loop ==== \\
// while loop (do not have to define the times it loops) + Break Key word
/*
// Example 1
let i = 0

while (i < 10) {
    console.log(i)
    i++
}
*/

// Demo - 2
/*
// ARRAYS
18) Make an array ( array[1, 2, 3, 4] )
    a) show that an array can be a mix of types
    b) show that an array comes back as object in typeof
    c) stress the importance of order of an array
19) Zero Based Indexed
    a) length = varName.length    
    b) select = varName[3]
20) Operations (Update, Random position not being used)
    b) update = varName[2] = 'Replace element'
    c) insert into a position = varName[20] = 'New element'
21) Array Method
    a) END: Push Pop -- varName.push('new element') varName.pop()
    b) START: Shift, UnShift -- varName.shift() varName.unshift('new element')
22) More Methods (Concat, Includes, Indexof, join, reverse, slice, splice, sort)
    a) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    b) includes = varName.includes('element') -- get a true or false
    c) indexof = varName.indexof('element') -- get the index (if not there -1)
		d) find = varName.find('element') -- get the index (if not there -1)
23) Nested Arrays (example: List[2][1])
    varName[[1,2],['a','b'],[100,200]]
24) Use 'CONST' with arrays

// ****** Part 18 ****** \\
// arrays
// console.log([]);
// console.log([1,2,3,4]);
// console.log([1,'2',true,1234]);
// console.log(typeof []);


// ****** Part 19 ****** \\
// Zero Based
// const varArray = [1,'2',true,1234]
// console.log(varArray);
// console.log(varArray[2]);
// console.log(varArray.length);


// ****** Part 20 ****** \\
// Update
// const arr1 = [1, 2, 3, 4]
// arr1[2] = 'rabbit';
// // arr1[arr1.length] = 5;
// // arr1[10] = 9

// console.log(arr1);
// console.log(arr1.length);


// ****** Part 21 ****** \\
// Method push & unshift
// const arr1 = [1, 2, 3, 4]
// arr1.push(5);
// // arr1.pop();
// // arr1.shift();
// // arr1.unshift(0);

// console.log(arr1);


// ****** Part 22 ****** \\
// Helpful Methods
// const varArray = [1, 2, 'element', 'smith', 'element', 10]
// console.log(varArray.includes('element'));
// console.log(varArray.indexOf('element'));
// console.log(varArray.find((a)=> a > 5)); // This is a little complicated as it has a callback


// ****** Part 23 ****** \\
//Nested Arrays
// let arr2 = [
// 	[1, 2],
// 	['a', 'b'],
// 	[100, 200],
// ];

// console.log(arr2[1][1]);


// ****** Part 24 ****** \\
// Set with const
// const arr1 = [1, 2, 3, 4]
// arr1[2] = 'Hello';
// console.log(arr1.length);

// // arr1 = 'text';
*/

// Demo - 3
/*
// ==== Standard Loop ==== \\
// const array1 = [1, 2, 3, 4, 5];

// for (let i = 0; i < array1.length; i++) {
//     console.log(`array position = ${i} contains ${array1[i]}`);
// }

// ==== Nest Loops ==== \\
// const array1 = [1, 2, 3, 4, 5];

// for (let i = 0; i < array1.length; i++) {
//     console.log(`array position = ${i} contains ${array1[i]}`);
//     for (let j = 0; j <= 3; j++) {
//         console.log(`this is j = ${j}`);
//     }
// }

// ==== Array Loop 'For Of' ==== \\
// let exampleArray = [
//     [1, 2, 3],
//     ['a', 'b', 'c'],
//     [true, false, null],
// ];

// //  console.log(exampleArray);

// // Example with a standard for loop
// for (let i = 0; i < exampleArray.length; i++) {
//     const row = exampleArray[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// // same but written with for of loop
// // Can see it is much shorter
// for (let i of exampleArray) {
//     for (let j of i) {
//         console.log(j);
//     }
// }
*/

// Demo - 4
/*
25) Make an Object Literal ( object {name: 'Foo Barr', age: 30} )
26) Operations (Select, Update, Add, Delete)
    a) select = varName["name"] or varName.name
    b) update = varName.name = 'richard'
    c) add = varNewName = 'Julie'
    d) delete = delete varName.name
27) Nested Arrays with Objects (Example: array[ {ob1:'word', ob2: 30}, {obA:'word2', obB:32 } ])
    a) access an array within an array = varName[0][1]
    b) access an object within an array = varName[1].key
28) Nested Objects with Arrays (Example: object{ array1: [1,2,3], array2: [4,5,6] })
    a) access an array = varName.key[2]
    b) access an object = varName.key.innerKey

// ****** Part 25 ****** \\
// Object
// const obj1 = {
// 	fistName: 'Foo',
// 	lastName: 'Bar',
// };

// // Selector Brackets
// console.log(obj1['lastName']);
// // Selector Dot Notation
// console.log(obj1.lastName);

// ****** Part 26 ****** \\
// Working with objects
// const obj1 = {
// 	fistName: 'Foo',
// 	lastName: 'Bar',
//   age: 21
// };

// // select
// console.log(obj1.fistName);

// // Update
// obj1.age = 31
// console.log(obj1)

// // Insert
// obj1.email = 'a@a.com'
// console.log(obj1)

// // Delete
// delete obj1.age;
// console.log(obj1)


// ****** Part 27 ****** \\
// Array of Objects
// const arr = [];

// arr.push(
// 	{
// 		fistName: 'Foo',
// 		lastName: 'Bar',
// 	},
// 	{
// 		fistName: 'Julie',
// 		lastName: 'Jones',
// 	},
// 	[1, 2]
// );

// console.log(arr[1].fistName);

// ****** Part 27 ****** \\
// Objects of arrays
// const obj = {}

// obj.arr1 = [1,'2',3]
// obj.arr2 = ['Hello','every','one']
// obj.arr3 = [4,5,'6']
// obj.objInside = {key1: 'first', key2: 'second'}

// console.log(obj);
// console.log(obj.arr2[1]);
*/
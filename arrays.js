// 1
let myArr1 = ["apple", "banana", "cherry", "date", "elderberry"];
myArr1.splice(2, 1, 'strawberry');
console.log(myArr1);
// 2 Append :
let myArr2 = ["apple", "banana", "cherry", "date", "elderberry"];
myArr2.push('orange');
console.log(myArr2);
// 3 Prepend:
let myArr3 = ["apple", "banana", "cherry", "date", "elderberry"];
myArr3.unshift('guava');
console.log(myArr3);
// 4. Slice:
let myArr4 = ["apple", "banana", "cherry", "date", "elderberry"];
let a = myArr4.slice(1, 4);
console.log(a);
export {};

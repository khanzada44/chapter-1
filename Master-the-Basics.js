let a = 10;
let b = 20;

let c = a;
a = b;
b = c;

a = a + b; // 30
b = a - b; // 10
a = a - b // 20

// [a , b] = [b, a]; 
// console.log('a', a);
// console.log('b', b);

let divide_a = 7;
let divide_b = 2;

console.log(Math.floor(divide_a/divide_b));


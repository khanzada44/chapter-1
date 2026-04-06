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

// console.log(Math.floor(divide_a/divide_b));


let mode_a = 7;
let mode_b = 2;

// console.log(mode_a % mode_b);



let d = 4561;
// console.log(Math.floor(d/10));


// < > <= >= != || &&

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false
console.log(10 != 11); // true
console.log(10 == 10); // true
console.log(10 === '10'); // false
console.log(5 > 3 && 10 < 18.5); //true
console.log(5 > 30 || 10 < 18.5); //true




// ++ --

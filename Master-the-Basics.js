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
let post_increment_a = 10
let post_increment_b = post_increment_a++;
console.log(post_increment_b);

let pre_increment_a = 10
let pre_increment_b = ++pre_increment_a;
console.log(pre_increment_b);

let a_true = true
a_true++
console.log('a_true', a_true);

let a_false = false
a_false++
console.log('a_true', a_false);


// let post_increment_number = 10++
//console.log(post_increment_number); // Error


// Math Functions


console.log('Math.round', Math.round(10.58)); 
console.log('Math.ceil', Math.ceil(10.1));
console.log('Math.floor', Math.floor(10.95));
console.log('Math.trunc', Math.trunc(10.95));
console.log('Math.pow', Math.pow(5,3));
console.log('Math.pow', Math.pow(5,3));
console.log('Math.sqrt', Math.sqrt(25));
console.log('Math.cbrt', Math.cbrt(64));
console.log('Math.abs', Math.abs(-5));
console.log('Math.max', Math.max(50,90,100,10));
console.log('Math.min', Math.min(50,90,100,10));

let max_number = 40;
let min_number = 10;

console.log('Math.random', Math.trunc(Math.random() * max_number + min_number) + 1);


const tofixed_a = 10.32133
console.log(Number(tofixed_a.toFixed(2)));



let room_length = 10;
let room_width = 5;


console.log('Answer',(room_length * room_width)% 5);



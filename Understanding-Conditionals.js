let user_age = '23';
let user_age_number = Number(user_age)
console.log(user_age_number);

if (isNaN(user_age)) {
    console.log('invalid input');
}
else if (user_age >= 18 && user_age <= 90) {
    console.log(`Your age is ${user_age} you can vote`);
}
else {
    console.log(`Your age is ${user_age}`);
}

// Shop Discount;

// 0 - 5000 0%
// 5001 - 7000 5%
// 7001 - 9000 10%
//more then 9000 20%


let amount = 9432;
let five_persent = Math.trunc((amount * 5) / 100);
let ten_persent = Math.trunc((amount * 10) / 100);
let twonty_persent = Math.trunc((amount * 20) / 100);

if (amount <= 5000) {
    console.log(`Your payable amount is ${amount} not discount`);
}
else if (amount >= 5001 && amount <= 7000) {
    console.log(`The total Payable amount is ${amount - five_persent} and discount amount is ${five_persent}`);
}
else if (amount >= 7001 && amount <= 9000) {
    console.log(`The total Payable amount is ${amount - ten_persent} and discount amount is ${ten_persent}`);
}
else {
    console.log(`The total Payable amount is ${amount - twonty_persent} and discount amount is ${twonty_persent}`)
}


//  Bill

// up to 100 || Prices Rs 4.2 unit
// 101 to 200 || Prices Rs 6 unit
// 201 to 400 || Prices Rs 8 unit
// more then 400 || Prices Rs 13 unit


// let bill_unit = 120;
// billing_amount = 13;
// if (bill_unit <= 100) {
//     billing_amount = 4.2
// }
// else if (bill_unit <= 200) {
//     billing_amount = 6;
// }
// else if (bill_unit <= 400) {
//     billing_amount = 8;
// }
// console.log(`Billing Prices is ${bill_unit * billing_amount}`);



// up to 100 || Prices Rs 4.2 unit
// 101 to 200 || Prices Rs 6 unit
// 201 to 400 || Prices Rs 8 unit
// more then 400 || Prices Rs 13 unit


let billing_unit = 700;
let billing_amount;
if (billing_unit > 400) {
    billing_amount = (billing_unit - 400) * 13;
    billing_unit = 400;
}
if (billing_unit > 200 && billing_unit <= 400) {
    billing_amount += (billing_unit - 200) * 8;
    billing_unit = 200;
}
if (billing_unit > 100 && billing_unit <= 200) {
    billing_amount += (billing_unit - 100) * 6;
    billing_unit = 100;
}
billing_amount += billing_unit * 4.20;

console.log(`Your billing amount is ${billing_amount}`);

let pk_rupees = 6000;

if (pk_rupees > 5000) {
    console.log('Rupees 5000',Math.trunc(pk_rupees / 5000));
    pk_rupees = pk_rupees % 5000;
}
if (pk_rupees > 1000) {
    console.log('Rupees 1000',Math.trunc(pk_rupees / 1000));
    pk_rupees = pk_rupees % 1000;
}
if (pk_rupees > 500) {
    console.log('Rupees 500',Math.trunc(pk_rupees / 500));
    pk_rupees = pk_rupees % 500;
}
if (pk_rupees > 100) {
    console.log('Rupees 100',Math.trunc(pk_rupees / 100));
    pk_rupees = pk_rupees % 100;
}
if (pk_rupees > 50) {
    console.log('Rupees 50',Math.trunc(pk_rupees / 50));
    pk_rupees = pk_rupees % 50;
}
if (pk_rupees > 20) {
    console.log('Rupees 20',Math.trunc(pk_rupees / 20));
    pk_rupees = pk_rupees % 20;
}
if (pk_rupees > 10) {
    console.log('Rupees 10',Math.trunc(pk_rupees / 10));
    pk_rupees = pk_rupees % 10;
}
if (pk_rupees > 5) {
    console.log('Rupees 5',Math.trunc(pk_rupees / 5));
    pk_rupees = pk_rupees % 5;
}
if (pk_rupees === 1) {
    console.log('Rupees 1', pk_rupees);

}


// Ternary Oprater ? :

12 > 13 ? console.log('true'): console.log('false');
console.log(13 > 12 ? 'Thirteen is Graterthen Twelve' : 'Thirteen is Not Graterthen Twelve');
let number_ternary = 10;
console.log(number_ternary > 0 ? 'Positive' : number_ternary < 0 ? 'Nagativ' : 'zaro');



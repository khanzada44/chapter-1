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


// let billing_unit = 700;
// let billing_amount;
// if (billing_unit > 400) {
//     billing_amount = (billing_unit - 400) * 13;
//     billing_unit = 400;
// }
// if (billing_unit > 200 && billing_unit <= 400) {
//     billing_amount += (billing_unit - 200) * 8;
//     billing_unit = 200;
// }
// if (billing_unit > 100 && billing_unit <= 200) {
//     billing_amount += (billing_unit - 100) * 6;
//     billing_unit = 100;
// }
// billing_amount += billing_unit * 4.20;

// console.log(`Your billing amount is ${billing_amount}`);


// Pk Denomination brackdone

// let pk_rupees = 6000;
// let pk_banknotes = 0;

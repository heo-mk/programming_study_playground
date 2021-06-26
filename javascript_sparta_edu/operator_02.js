// comparison operators 
console.log(1 < 2);
console.log(2 <= 2);
console.log(1 > 2);
console.log(1 >= 2);
console.log();

// Logical operators 
let isOnSale = true;
let isDiscountItem = true;

console.log(isOnSale && isDiscountItem); // true and true
console.log(isOnSale || isDiscountItem); // true or true

isOnSale = false;
console.log(isOnSale && isDiscountItem);  // false and true
console.log(isOnSale || isDiscountItem);  // false or true

isDiscountItem = false;
console.log(isOnSale && isDiscountItem);  // false and false
console.log(isOnSale || isDiscountItem);  // false or false

console.log(!isOnSale);
console.log(!isDiscountItem);
console.log();

// Equality operators
console.log(1 === 1);
console.log(1 === 2);
console.log('JavaScript' === 'JavaScript');
console.log('javascript' === 'JavaScript');
console.log();

console.log(1 === "1");
console.log(1 == "1");
console.log();

let a1 = 2231245;
let a2 = 2324351;
const totalPrice = a1 + a2;
const discountedPrice = totalPrice*0.8;
console.log(`총 ${discountedPrice}원에 물건들을 구입합니다.`);


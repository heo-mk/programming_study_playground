console.log("My" + "car")
console.log('1' + 2); // string
console.log(1 + 2);

// template literal
const shoesPrice = 200000; 
console.log(`이 신발의 가격은 ${shoesPrice}원입니다.`)
console.log()

// Numeric operators
console.log(2 + 1);
console.log(2 - 1);
console.log(2 * 3);
console.log(8 / 2);
console.log(10 % 3);
console.log(10 ** 2); 
console.log();

// increment and decrement operators
let count = 1;
const preIncrement = ++count;
console.log(count);
console.log(preIncrement);
console.log(`count: ${count}, preIncrement: ${preIncrement}`);
console.log()

let count1 = 1;
const postIncrement = count1++;
console.log(count1);
console.log(postIncrement);
console.log(`count: ${count1}, postIncrement: ${postIncrement}`);
console.log();

// assignment operators
const shirtsPrice = 100000;
const shoesPrice2 = 80000;
let totalPrice = 0;

totalPrice += shirtsPrice;
console.log(totalPrice);

totalPrice += shoesPrice2;
console.log(totalPrice);

totalPrice -= shirtsPrice;
console.log(totalPrice);
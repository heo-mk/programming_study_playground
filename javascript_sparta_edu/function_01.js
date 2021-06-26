function calculateAvg(price1, price2) {
  const sum = price1 + price2;
  console.log(`두 상품의 가격 총합은 ${sum}입니다.`);
  const avg = sum / 2;
  console.log(`두 상품 가격의 평균은 ${avg}입니다.`);
  return avg;
}
console.log();

const priceA = 1000;
const priceB = 2000;
const avg1 = calculateAvg(priceA, priceB);
console.log(`두 상품가격의 평균은 ${avg1}입니다.`);
console.log();

const priceC = 2000;
const priceD = 3000;
const avg2 = calculateAvg(priceC, priceD);
console.log(`상품 C와 D 가격의 평균은 ${avg2}입니다.`);
console.log();

function calculcateAvgThree(price1, price2, price3) {
  const sum = price1 + price2 + price3;
  const avg = sum/3;
  return avg;
} 

const priceE = 3000;
const priceF = 4000;
const priceG = 5600;
const avg3 = calculcateAvgThree(priceE, priceF, priceG);
console.log(`세 제품가격의 평균은 ${avg3}입니다.`);
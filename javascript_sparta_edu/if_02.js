const shoesPrice = 45000;
if (shoesPrice < 40000) {
  console.log('신발을 사겠습니다.');
} else if (shoesPrice <= 50000) {
  console.log('고민 좀 ')
} else {
  console.log('너무 비싸요');
}

const distance = 3.4;
if (distance < 2) {
  console.log('걸어가자');
} else if (distance >= 2 && distance < 5) {
  console.log('택시타');
} else {
  console.log('기차타');
}
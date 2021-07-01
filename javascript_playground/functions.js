// 함수 선언
hoisted(); //

function hoisted() {
  console.log("선언임 암튼 선언임");
};

// 호이스팅 안되는 경우
notHoisted();

var notHoisted = function () {
  console.log('bar');
}
window.onload = function() {
  alert('hello world')
};

var div = document.querySelector('div');
div.addEventListener('click', function() {
  console.log('hi');
})

// event Bubbling : 요소에서 이벤트 발생 -> 부모 요소를 타고 위로 파도타기 -> 이벤트 전달
// event Capturing: 요소에서 이벤트 발생 -> 하위 요소를 타고 아래로 파도타기 -> 이벤트 전달


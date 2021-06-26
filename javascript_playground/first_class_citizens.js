// first class citizen
let a = 1;

function f1(num) {
  let b = num + 1;
  return b 
};

console.log(f1(a));

// first class object
let c = {
  msg: 'c는 1급객체입니다.'
};

function f2(c) {
  let d = c;
  d.msg = '이것은 2번째 메시지입니다.'
  return d;
};

console.log(f2(c));

// first class function 
let fc = function(num) {
  return num * num;
};

function fc2(fun) {
  let num = fun(10)
  return function (num2) {
    let num2 = num2 || 2
    return num * num2
  }
} 


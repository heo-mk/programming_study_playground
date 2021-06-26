// call
// var func = function (a, b, c) {
//   console.log(this, a, b, c);
// };

// func(1,2,3);
// func.call({x:1}, 4, 5, 6);

// var obj = {
//   a: 1,
//   method: function(x, y) {
//     console.log(this.a, x, y);
//   }
// };

// obj.method(2, 3);
// obj.method.call({a:4}, 5, 6);

// apply 
// var func = function(a, b, c) {
//   console.log(this, a, b, c)
// }

// func.apply({x:1}, [4,5,6]);

// var obj = {
//   a:1,
//   method: function(x,y) {
//     console.log(this.a, x, y);
//   }
// };
// obj.method.apply({a:4}, [5, 6]);

// call, apply
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

Array.prototype.push.call(obj, 'd')
console.log(obj);

var arr = Array.prototype.slice.call(obj);
console.log(arr);
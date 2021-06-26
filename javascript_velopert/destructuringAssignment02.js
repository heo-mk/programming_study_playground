const [a1, a2, ...rest_a] = [1,2,3,4,5,6,7,8,9]
console.log(a1);
console.log(a2);
console.log(rest_a);
console.log()

const [d1, d2, ...rest_d] = [1,2,3,4,5,6,7,8,9]
console.log(d1);
console.log(d2);
console.log(...rest_d);
console.log();

// error
// [c1, c2, ...rest_c, c3] = [1,2,3,4,5,6,7,8,9];

let { e1, e2, ...rest_e} = {e1: 10, e2: 20, e3: 30, e4: 40};
console.log(e1);
console.log(e2);
console.log(rest_e);
console.log();

// different variable name case
let { f1: awesome_name, f2: dumb, ...rest_f } = { f1 : 10, f2: 20, f3: 30, f4: 40 };
console.log(awesome_name);
console.log(dumb);
console.log();

// a string not allowed to be a key name.
let key = 'it is a key';
let {'an-apple': an_apple, [key]: it_is_a_key } = {'an-apple': 10, 'it is a key': 20};
console.log(an_apple);
console.log(it_is_a_key);
console.log();

// if it doesn't have var or let or const in case of object destructring assignment
({g1, g2} = {g1: 10, g2: 20}); // ok
console.log(g1); // 10
console.log(g2); // 20
// { g3, g4 } = { g3: 30, g4: 40 }; // error
console.log();

// basic value assignment
[h1, h2] = [10];
console.log(h1); // 10
console.log(h2); // undefined
console.log()

let {i1, i2} = { i1: 20};
console.log(i1); // 20
console.log(i2);
console.log();

// value assigned to basic variables in advanced
[j1 = 10, j2 = 20] = [10];
console.log(j1); 
console.log(j2);
console.log();

let {j3 = 30, j4: new_name=40} = {}
console.log(j3);
console.log(new_name);
console.log();

// copy
let arr = [1,2,3];
let copy1 = arr;   // 그냥 참조만
let [...copy2] = arr;
let copy3 = [...arr];

arr[0] = 'String';
console.log(arr);    // shallow copy
console.log(copy1);  // shallow copy
console.log(copy2);  // deep copy
console.log(copy3);  // deep copy
console.log(); //

// copy : object case
let prevState = {
  name: 'ddffd',
  birth: '1988-02-29',
  age: 22,
};

let state = {
  ...prevState,  // spread : deep copy
  age: 33,
};

console.log(state);


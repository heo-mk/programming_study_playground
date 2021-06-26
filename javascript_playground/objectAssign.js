const target = {a:1, b:2};
const source = {b:3, d:4};
const returnedTarget = Object.assign(target, source);

console.log(target)
console.log(source)
console.log(returnedTarget)
console.log()

emplyees = [
	{
		firstName: 'John',
		lastName: 'Doe',
	},
	{
		firstName: 'David',
		lastName: 'Hue',
	},
	{
		firstName: 'Jack',
		lastName: 'Daniel',
	},
];

emplyee = {
	firstName: 'David',
	lastName: 'Cameron',
}
console.log(emplyees);
console.log()

Object.assign(emplyees[1], emplyee);

console.log(emplyees);

// obj copy
let user = {firstName: "John", lastName: 'Doe'};
let user_clone = Object.assign({}, user);
console.log(user);
console.log(user_clone);
console.log();

// several args
let user2 = {
  username: "John",
};

let user2_id = {
  id: 1,
};

let email = {
  email: "john@exampl.com",
};

let tel = {
  tel: "090-1111-1111",
}

user2 = Object.assign(user2, user2_id, email, tel);
console.log(user2);
console.log(user2_id);
console.log(email);
console.log(tel);
console.log();

// same keys
let user_0 = {
  id: 0,
};

let user_id_1 = {
  id: 1,
};

let user_id_2 = {
  id: 2,
};

let user_id_3 = {
  id: 3,
};

user_0 = Object.assign(user_0, user_id_1, user_id_2, user_id_3);

console.log(user_0);
console.log();
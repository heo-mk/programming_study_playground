// constructor
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() {
    console.log(this.sound)
  };
};

// prototype
Animal.prototype.say = function() {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

// inheritance of constructor
function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
};
Dog.prototype = Animal.prototype

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
};
Cat.prototype = Animal.prototype;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);
console.log();

///////////////////////////
// class 

class Animal2 {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound
  };
  say() {
    console.log(this.sound);
  };
};

class Pig extends Animal2 {
  constructor(name, sound) {
    super('돼지', name, sound);
  };
};

class Bird extends Animal2 {
  constructor(name, sound) {
    super('새', name, sound);
  };
};

const pig = new Pig('꿀꿀이', '꿀꿀');
const bird = new Cat("짹짹이", "짹짹");
const pig2 = new Pig('꿀꿀이', '꿀꿀');
const bird2 = new Cat("짹짹이", "짹짹");

pig.say();
bird.say();
pig2.say();
bird2.say();
console.log();

///////////////////////////
class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  };
  print() {
    console.log(`${this.name}을 파는 음식점들:`)
    console.log(this.brands.join(', '));
  };
};

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');
console.log(pizza.brands);
console.log()


const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');
console.log(chicken.brands);
console.log()

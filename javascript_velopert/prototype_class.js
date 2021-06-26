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
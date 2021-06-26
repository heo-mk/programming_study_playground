// const [cat, dog, tiger] = ['Cat', 'Dog', 'Tiger'];
// console.log(cat);
// console.log(dog);
// console.log(tiger);
// console.log();

// const animalList = ['CAT', 'DOG', 'TIGER'];
// const [Cat, ...restAnimalList] = animalList;
// console.log(Cat);
// console.log(restAnimalList);
// console.log();

// const [cat, dog, tiger, animal='MONKEY'] = ['CAT', 'DOG', 'TIGER'];
// console.log(cat);
// console.log(dog);
// console.log(tiger);
// console.log(animal);

// const animals = {
//   cat: "CAT",
//   dog: "DOG",
//   tiger: "TIGER",
// };
// const cat = animals.cat;
// const dog = animals.dog;
// const tiger = animals.tiger;
// console.log(cat);
// console.log(dog);
// console.log(tiger);

// const {cat, dog, tiger} = {
//   cat: "CAT",
//   dog: "DOG",
//   tiger: "TIGER",
// };
// console.log(cat);
// console.log(dog);
// console.log(tiger);

// const {cat, ...animals} = {
//   cat: "CAT",
//   dog: "DOG",
//   tiger: "TIGER",
// };
// console.log(cat);
// console.log(animals);

// const {cat, dog, tiger, monkey="monkey"} = {
//   cat: "CAT",
//   dog: "DOG",
//   tiger: "TIGER",
// };
// console.log(cat);
// console.log(dog);
// console.log(tiger);
// console.log(monkey)

// const object = { a:1, b: 2};
// const { a, b} = object;
// console.log(a);
// console.log(b);

// const object = {a: 1, b: 2};
// function print({a, b}) {
//   console.log(a);
//   console.log(b);
// }

// print(object);

// const object = {a: 1};

// function print({a, b}) {
//   console.log(a);
//   console.log(b);
// }

// print(object);

// const object = {a:1};
// function print({a, b=2}) {
//   console.log(a);
//   console.log(b);
// }
// print(object)

// const object = {a:1};
// const {a, b=2} = object;
// console.log(a);
// console.log(b);

// const animal = {
//   name: '멍멍이',
//   type: '개',
// };

// // const nickname = animal.name;
// // console.log(nickname);
// const {name: nickname} = animal;
// console.log(nickname);

// const array = [1, 2];
// const [one, two] = array;

// console.log(one);
// console.log(two);

// const array2 = [1];
// const [one2, two2 = 2] = array2;

// console.log(one2);
// console.log(two2);

// const deepObject = {
//   state: {
//     information: {
//       name: 'velopert',
//       languages: ['korean', 'english', 'chinese']
//     }
//   },
//   value: 5
// };

// const { name, languages } = deepObject.state.information;
// const { value } = deepObject

// const extracted = {
//   name,
//   languages,
//   value,
// }

// console.log(extracted);

const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5,
};

const {
  state: {
    information: {name, languages}
  },
  value
} = deepObject;

const extracted = {
  name, 
  languages,
  value,
};

console.log(extracted);
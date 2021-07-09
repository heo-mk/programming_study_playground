// 배열보내기
export let month = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep']

// 상수 내보내기
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// 클래스 내보내기
export class User {
  constructor(name) {
    this.name = name;
  };
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// export가 바로 앞에 있지 않아도.
function sayHi(user) {
  alert(`Hello, ${user}!`)
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { sayHi, sayBye };

// import : 가져오기
import { sayHi, sayBye } from "./say.js";

sayHi('mK'); // Hello, mK!
sayBye('mK'); // Bye, mK!

// 가져올게 많다면!
import * as say from './say.js';
say.sayHi('mK');
say.sayBye('mK');

// import as
import { sayHi as hi, sayBye as bye } from './say.js';

hi('mkmk');
bye('onsunonsun');

// export as
export { sayHi as hi, sayBye as bye } from './say.js';

// 그러면은
import * as say from './say.js';

say.hi('MK');
say.by('mk');

// export default
export default class User {
  constructor(name) {
    this.name = name;
  };
}

import User from './user.js';
new User('John')

// named export 
export class User {...}
import {User} from ...;

// default export 
export default class User {...}
import User from ...

// default export로 보낼 클래스, 함수, 배열에 이름이 없을 경우
export default class { // 클래스 이름 없음
  constructor() {
  };
}

export default function(user) { // 함수 이름 없음
  alert(`Hello, ${user}!`);
}

// 이름 없이 배열의 형태로 내보낸다
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// default를 붙이지 않았는데 개체에 이름이 없는 경우, 에러발생
// 에러코드
export class {  // 에러! 왜냐면 default도 없고 클래스의 이름도 없으니까.
  constructor() {}
}

// default : 기본 내보내기를 참조하는 용도로 종종 사용됨
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 함수 선언부 앞에 export default를 붙여준것과 동일
export { sayHi as default };

// user.js
// default export
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// named export
export function sayHi(user) {
  alert(`Hello, ${user}!`)
}

// default export, named export 동시에 가져오기
import { default as User, sayHi } from './user.js';
new User('John');

// /* 사용해서 모든 것을 객체 형태로 가져오기 
import * as user from './user.js';

let User = user.default; // === default export
new User('John');

// default export의 이름에 관한 규칙
// named export는 원래 이름 그대로 써야 하는게 국룰
import { User } from './user.js';

// export default는 개발자가 원하는대로 이름 지어주기 가능
import User from './user.js';
import MyUser from './user.js';

// 그러나 혼동을 막기 위해서 파일 이름이랑 같게 해주는게 국룰
import User from './user.js';
import LoginFrom from './loginFrom.js';
import func from '/path/to/func.js';

// re-export the
export {sayHi} from './say.js'; // sayHi를 다시 내보내기 한다.
export {default as User} from './user.js'; // default export를 다시 내보내기 한다

// auth/index.js
// login, logout 가져오고 바로 내보내기
import { login, logout } from './helpers.js';
export {login, logout};

// User를 가져온 다음 바로 내보내기
import User from './user.js';
export {User};

export {login, logout} from './helpers.js';
export {default as User} from './user.js';

// default export 다시 보내기
export * from './user.js'; // named export 내보내기
export {default} from './user.js'; // default export를 다시 내보내기

// 정리
export [default] class/function/variable ... 
export {x [as y], ...} 
export {x [as y], ...} from 'module';
export * from "module";
export {default [as y]} from "module";

import {x [as y], ...} from 'mod';
import x from "mod";
import {default as x} from "mod";
import * as obj from "mod";
import "mod"
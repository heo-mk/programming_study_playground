const element = <h1>Hello, world</h1>


// JSX안에 자바스크립트표현식 넣기
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
};

const user = {
  firstName: 'mk',
  lastName: 'heo',
};

const element = (
  <h1>
    {/* 여기가 자바스크립트 표현식이 포함된 부분 */}
    Hello, {formatName(user)}! 
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root'),
);

// JSX === 표현식: true
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// JSX 속성 정의
const element = <div tabIndex="0"></div>
// 중괄호에 자바스크립트 표현식 넣을 수 있음
const element = <img src={user.avatarUrl}></img>

// JSX 자식 정의
const element = <img src={user.avatarUrl} />;
// JSX 태그는 자식을 가질 수 있음
const element= (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

// JSX injection 공격 예방
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>

// JSX가 BABLE로 변환되는 모습
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'hi',
  {className: 'greeting'},
  'hello, world'
);

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello World',
  }
};
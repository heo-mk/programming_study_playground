import React, { useState, useEffect } from 'react';

function Example() {
  count [count, setCount] = useState(0);

  // componentDidMount, ComponentDidUpdate
  // useEffect인 이유는 이게 side Effect들을 관리하기
  // sideEffect : 데이터 가져오기, 데이터 구독하기(subscription, redux랑 하는것)
  // 리액트 컴포넌트 DOM을 수동으로 수정하기 등등
  // useEffect = componentDidMount + componentDidUpdate +componentWillUnmount
  // 리액트에는 side Effect가 두개 존재 : 정리(clean-up: 사라지게 한다는 뜻)가 필요한 것 + 그렇지 않은 것
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  )
};


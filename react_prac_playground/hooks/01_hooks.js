import React, { useState } from 'react';

function Example() {
  // count라는 새로운 상태값을 저장한다
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You Clicked {count} timnes</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};


import React from 'react';

function App() {
  const number = 1;

  return (
    <div className='App'>
      <p>안녕하세요, 리액트반입니다!</p>
      <p>{number > 10 ? `${number}는 10보다 크다` : `${number}는 10보다 작다`}</p>
    </div>
  );
};

export default App;
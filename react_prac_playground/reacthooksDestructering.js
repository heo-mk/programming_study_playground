import React, {useState} from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }


  return (
    <div>
      <p>You Clicked {count}</p>
      <button onClick={handleIncrement}> 
        Click me
      </button>
    </div>
  );
}

function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
};

// useEffect 
useEffect(() => {
  // do something...
});

useEffect(() => {
  // do something...
}, []);

useEffect(() => {
  // do something with some states and props
}, [count]);

useEffect(() => {
  // do something...
  return () => {
    // do something...
  }
});

// several useEffects 
const [count, setCount] = useState(0);
useEffect(() => {
  // do something
});

const [isOnline, setOnline] = useState(null);
useEffect(() => {
  // do something...
  return () => {
    // do something...
  };
});

// useCallback
const Example = ({data}) => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
    data.add();
  }, [data]);

  return (
    <Cart onIncrement={handleIncrement} count={count} />
  );
}
export default Example;

// useRef
const Example = () => {
  const inputRef = useRef();

  return (
    <input ref={inputRef} type="text" />
  );
}
export default Example;

// destructuring
<Example onAdd={handleAdd} user={user.name} />

import React from 'react';
const Example = ({onAdd, user: userName}) => {
  const handleAdd = () => {
    console.log(`${userName} added!`);
    onAdd();
  };
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
export default Example;








class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  };

  render() {
    return (
      <div>
        <p>You Clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  };
};

////////////////////////////
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

///////////////////////
const Example = (props) => {
  // 여기서 hooks 사용 가능
  return <div/>
};

function Example(props) {
  // 여기서 hooks 사용 가능
  return <div/>
};

///////////////////////////////////
import React, {useState} from 'react';

function Example() {
  // ................
};

///////////////////////////////////
const [fruit, setFruit] = useState('banana');
const fruitStateVariable = useState('peach');
const friut = fruitStateVariable[0];
const setFruit = fruitStateVariable[1];

///////////////////////////////////////////////
function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState({text: 'Learn Hooks'})
}

function handleOrangeClick() {
  setFruit('orange');
};



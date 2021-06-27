const numbers = [1,2,3,4,5];
// const doubled = numbers.map((number) => number*2);
// console.log(doubled);

const listItems = numbers.map((number) => {
  return (
    <li key={number.toString()}>
      {number}
    </li>
  )
});

ReactDom.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => {
    return (
      <li key={number.toString()}>
        {number}
      </li>
    )
  });
  return (
    <ul>{listItems}</ul>
  );
};

const number = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

const todoItems = todos.map((todo) => {
  return (
    <li key={todo.id}>
      {todo.text}
    </li>
  );
});

const todoItems = todos.map((todo, index) => {
  return (
    <li key={index}>
      {todo.text}
    </li>
  )
})

function ListItem(props) {
  return <li>{props.value}</li>
};

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => {
    return (
      <ListItem key={number.toString()} value={number}/>
    )}
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
);



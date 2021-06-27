function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => {
        return ( 
          <li key={post.id}>
            {post.title}
          </li>
        )}
      )}
    </ul>
  );

  const content = props.posts.map((post) => {
    return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  })
  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  );        
}

const posts = [
  {id: 1, title: 'Hello World', content: "Welcome to learning React!"},
  {id: 2, title: 'Installation', content: "You can install React from npm."}
]
ReactDOM.render(
  <Blog posts={posts}/>,
  document.getElementById('root')
);

const content = posts.map((post) => {
  return (
      <Post
        key={post.id}  // 이건 props로 전달 안됨. 왜냐면 자식컴포넌트는 key 속성을 props로 받지 않음
        id={post.id}   // 이게 props로 전달됨
        />
    )
});

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => {
    <ListItem key={number.toString()} value={number}/>
  });
  return (
    <ul>
      {listItems}
    </ul>
  )
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => 
        <ListItem key={number.toString()} value={number}/>
      )}
    </ul>
  )
}

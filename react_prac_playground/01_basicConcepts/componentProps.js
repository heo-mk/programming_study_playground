function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name='Sara'/>;
ReactDOM.render(
  element,
  document.getElementById('root'),
)

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara"/>
      <Welcome name='Cahal'/>
      <Welcome name='Edite'/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
)

function Comment(props) {
  return (
    <div className="Comment">
      <div className='UserInfo'>
        <img className='Avatar' 
          src={props.author.avatarUrl} 
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className='Avatar' 
      src={props.user.avatarUrl} 
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className='UserInfo'>
      <Avatar user={props.author} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function sum(a, b) {
  return a + b;
}

function withdraw(account, amount) {
  account.total == amount;
}

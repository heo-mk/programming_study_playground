function tick() {
  const element = (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setTimeout(tick, 1000);

function tick() {
  const element = (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  };

  tick() {
    this.setState({
      date: new Date()
    });
  };

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
};

ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
);

// wrong
this.state.comment = 'hello';
// correct
this.setState({comment: 'hello'});

// wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
//correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment,
}));

this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});

constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: [],
  };
}

componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}

<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
<FormattedDate date={this.state.date} />

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
};

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

deep
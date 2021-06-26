state = {
  key: true,
  count: 0,
};

handleChildUnmount = () => {
  this.setState(prevState => ({ count: prevState.count + 1 }));
};

toggleKey = () => {
  this.setState(prevState => ({key: !prevState.key}));
};

render() {
  const {key, count } = this.state;

  return (
    <div>
      <button onClick={this.toggleKey}>Toggle Child Key</button>
      <Child key={key} count={count} onUnmount={this.handleChildUnmount} />
    </div>
  )
}
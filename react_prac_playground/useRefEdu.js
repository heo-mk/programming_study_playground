// class
class App extends React.Component {
  componentDidMount() {
    this.divRef = React.createRef();
  } 

  render() {
    return (
      <div>
        <div id="divR" ref={this.divRef}>
          App, here
        </div>
      </div>
    );
  }
}

// functional
import React, {useRef, useState} from "react";

const App = () => {
  const divRef = React.useRef();
  const valueRef = React.useRef(90);
  const [, setState] = useState();
  return (
    <div>
      값 : {valueRef.current}
      <div id="divR" ref={divRef}>
        App, here
      </div>
      <button onClick={() => ((valueRef.current = 88), setState({}))}> 증가 </button>
    </div>
  );
};

export default App;
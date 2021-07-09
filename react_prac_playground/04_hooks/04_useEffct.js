import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => { // browser API를 이용해 문서타이틀 지정.
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example

// class component 
class Example extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  };

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
}

// clean-up : class component 
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  };

  componentDidMount() {
    chatAPI.subscriobeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange,
    );
  }

  componenetWillUnmount() {
    chatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange,
    );
  }

  handleSatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.status.isOnline == null) {
      return 'Loading...';
    }
    return this.status.isOnline ? 'Online' : 'Offline';
  };
};

// clean-up class component
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setInOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    chatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    
    // clean-up 이후에 어떻게 정리(clean-up)할 것인지 표시한다.
    return function cleanup() {
      chatAPI.unsubscribeFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  };
  return isOnline? 'Online' : 'Offline';
};

// multiple effect : 관심사를 분리하기 위해서
// class component
class  FriendStatusWithCounter extends React.componenet {
  constructor(props) {
    super(props);
    this.state = { count:0, isOnline:null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    chatAPI.subscribeToFriendStatus(
      this.props.fried.id, 
      this.handleStatusChange,
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`;
      // 이전 friend.id에서 구독해제
      chatAPI.unsubscribeFromFriendStatus(
        prevProps.friend.id,
        this.handleStatusChange,
      );
      // 다음 friend.id를 구독한다
      chatAPI.subscribeToFriendStatus(
        this.props.friend.id,
        this.handleStatusChange,
      );
    }
  };

  componentWillUnmount() {
    chatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange,
    );
  }

  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline,
    });
  }
// ....
}

// functional component
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    chatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      chatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]);
// ...
};

// hooks cleanup & update process
chatAPI.subscribeToFriendStatus(100, handleStatusChange);

chatAPI.unsubscribeFromFriendStatus(100, handleStatusChange);
chatAPI.subscribeToFriendStatus(200, handleStatusChange);

chatAPI.unsubscribeFromFriendStatus(200, handleStatusChange);
chatAPI.subscribeToFriendStatus(300, handleStatusChange);

chatAPI.unsubscribeFromFriendStatus(300, handleStatusChange);


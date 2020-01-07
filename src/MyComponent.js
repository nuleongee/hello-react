import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === 10) return false; // 10에서 렌더링 안 함 (특정 조건에따라 렌더링을 막아줄 수 있는 함수)
    return true; // 11부터 다시 렌터링
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log("value 값이 바뀌었다!", this.props.value);
    }
  }

  componentWillUnmount() {
    console.log("Good Bye");
  }

  render() {
    return (
      <div>
        {this.props.missing.something}
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;

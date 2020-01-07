import React, { Component, Fragment } from "react";
// import Hello from "./Hello";
// import "./App.css";
// import MyName from "./MyName";
// import Counter from "./Counter";
import MyComponent from "./MyComponent";

// 클래스형
class App extends Component {
  state = {
    counter: 1,
    error: false
  };

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    this.setState({
      error: true
    });
    // API를 통해서 서버로 오류 내용 날리기
  }
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    if (this.state.error) {
      return <div>에러가 났어요!</div>;
    }
    return (
      <div ref={ref => (this.myDiv = ref)}>
        {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }

  // render() {
  //   return <Counter />;
  // }

  // render() {
  //   // 하이
  //   return (
  //     <div>
  //       {/* 멀티라인도 예외가 아니다! */}
  //       <h1
  //         something="asdfg" // 내가 여기에 주석으 쓸꺼야!
  //       >
  //         리액트
  //       </h1>
  //     </div>
  //   );
  // }

  // 함수형
  // function App() {
  //   const name = "react";
  //   const style = {
  //     backgroundColor: "black",
  //     color: "aqua",
  //     fontSize: 24,
  //     padding: "1rem"
  //   };
  //   return (
  //     <>
  //       {/* 주석은 화면에 보이지 않습니다. */}
  //       <Hello />
  //       <div style={style}>{name}</div>
  //       <div className="gray-box"></div>
  //     </>
  //   );
  // }
}

export default App;

import React, { Component, Fragment } from "react";
// import Hello from "./Hello";
// import "./App.css";

// 클래스형
class App extends Component {
  render() {
    const value = 3;

    return (
      <div>
        {(function() {
          if (value === 1) return <div>1이다</div>;
          if (value === 2) return <div>2이다</div>;
          if (value === 3) return <div>3이다</div>;
          return <div>없다</div>;
        })()}
      </div>
    );
  }

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

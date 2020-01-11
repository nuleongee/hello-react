import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";

// 클래스형
class App extends Component {
  state = {
    counter: 1,
    error: false
  };

  render() {
    return (
      <div>
        <PhoneForm />
      </div>
    );
  }
}

export default App;

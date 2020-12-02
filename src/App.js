import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";
//import Greet from "./component/Greet";
import Counter from "./component/Counter";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Greet />; */}
        <Counter />;
      </div>
    );
  }
}

export default App;

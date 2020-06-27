import React, { Component } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;

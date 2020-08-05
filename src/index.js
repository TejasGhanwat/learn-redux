import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { bugRemoved, bugAdded, bugResolved } from "./actionCreators";
store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugRemoved("Bug 1"));
store.dispatch(bugResolved(1));
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));

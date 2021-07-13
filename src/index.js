import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import store from "./models";
import Count from "./Count";

const { dispatch } = store;
// state = { count: 0 }
// reducers
dispatch({ type: "count/increment", payload: 1 }); // state = { count: 1 }
dispatch.count.increment(1); // state = { count: 2 }
// effects
dispatch({ type: "count/incrementAsync", payload: 1 }); // state = { count: 3 } after delay
dispatch.count.incrementAsync(1); // state = { count: 4 } after delay

const mapState = (state) => ({
  count: state.count,
});
const mapDispatch = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});
const CountContainer = connect(mapState, mapDispatch)(Count);
ReactDOM.render(
  <Provider store={store}>
    <CountContainer />
  </Provider>,
  document.getElementById("root")
);
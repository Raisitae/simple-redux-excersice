import React from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;

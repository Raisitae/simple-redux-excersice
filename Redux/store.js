import { createStore, combineReducers } from "redux";
import CountReducer from "./counter/reducers";
import BackgroundReducer from "./background/reducers";

const rootReducer = combineReducers({
  count: CountReducer,
  background: BackgroundReducer,
});

export const store = createStore(rootReducer);

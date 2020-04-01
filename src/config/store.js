import { createStore, combineReducers } from "redux";
import cartReducer from "../features/cart/reducer";

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(
  rootReducer
  //window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

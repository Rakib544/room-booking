import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleWare, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/reducers";

const bindMiddleWare = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleWare(...middleware));
  }

  return applyMiddleWare(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initialStore = () => {
  return createStore(reducer, bindMiddleWare(thunkMiddleware));
};

export const wrapper = createWrapper(initialStore);

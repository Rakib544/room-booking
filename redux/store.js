import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
const middleware = [thunk];

// const bindMiddleWare = (middleware) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleWare(...middleware));
//   }

//   return applyMiddleWare(...middleware);
// };

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
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export const wrapper = createWrapper(initialStore);

import { combineReducers } from "redux";
import { allRoomReducer } from "./roomReducers";

const reducer = combineReducers({
  allRooms: allRoomReducer,
});

export default reducer;

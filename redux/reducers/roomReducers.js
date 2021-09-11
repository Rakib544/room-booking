import {
  ALL_ROOM_FAIL,
  ALL_ROOM_SUCCESS,
  CLEAR_ERRORS,
} from "../constant/roomConstants";

//ALl room reducers
export const allRoomReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOM_SUCCESS:
      return {
        ...state,
        rooms: [...action.payload],
      };
    case ALL_ROOM_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

import { ALL_ROOM_FAIL, ALL_ROOM_SUCCESS } from "../constant/roomConstants";

//ALl room reducers
export const allRoomReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOM_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
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
      break;
  }
};

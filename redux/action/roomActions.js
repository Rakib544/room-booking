import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
  ALL_ROOM_FAIL,
  ALL_ROOM_SUCCESS,
  CLEAR_ERRORS,
} from "../constant/roomConstants";

export const getRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms`);
    dispatch({
      type: ALL_ROOM_SUCCESS,
      payload: data.rooms,
    });
  } catch (err) {
    dispatch({
      type: ALL_ROOM_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

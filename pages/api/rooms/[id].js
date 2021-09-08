import nc from "next-connect";
import dbConnect from "../../../config/dbConnection";
import {
  deleteRoom,
  getSingleRooms,
  updateRoom,
} from "../../../controllers/roomControllers";
import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.get(getSingleRooms);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;

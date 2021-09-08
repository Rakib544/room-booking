import Room from "../models/room";

//get all rooms => api/rooms
const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//create new room => api/rooms
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//get single rooms => api/rooms/"id"
const getSingleRooms = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!rooms) {
      return res.status(400).json({
        success: false,
        error: "Room not found with this ID",
      });
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//update single rooms => api/rooms/"id"
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(400).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    const updatedRoom = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      updatedRoom,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//delete single room => api/rooms/"id"
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return res.status(400).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    await room.remove();

    res.status(200).json({
      success: true,
      message: "Room deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export { allRooms, newRoom, getSingleRooms, updateRoom, deleteRoom };

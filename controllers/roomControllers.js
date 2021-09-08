import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import Room from "../models/room";
import ErrorHandler from "../utils/errorHandlers";

//get all rooms => api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4;
  const roomCount = await Room.countDocuments();

  let rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;

  const category = req.query.category;
  const location = req.query.location
    ? {
        address: {
          $regex: req.query.location,
          $options: "i",
        },
        category: category,
      }
    : { category: category };
  const currentPage = Number(req.query.page) || 1;
  const skip = resPerPage * (currentPage - 1);

  rooms = await Room.find({ ...location })
    .limit(currentPage)
    .skip(skip);

  res.status(200).json({
    success: true,
    roomCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

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
const getSingleRooms = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

//update single rooms => api/rooms/"id"
const updateRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
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
});

//delete single room => api/rooms/"id"
const deleteRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room deleted successfully",
  });
});

export { allRooms, newRoom, getSingleRooms, updateRoom, deleteRoom };

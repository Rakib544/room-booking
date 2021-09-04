const allRooms = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Room",
  });
};

export { allRooms };

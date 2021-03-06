import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the room name"],
    trim: true,
    maxLength: [100, "Room name cannot be exceed 100 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter the room price"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter the room description"],
  },
  address: {
    type: String,
    required: [true, "Please enter the room address"],
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter the guest capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter the number of beds in room"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airCondition: {
    type: Boolean,
    default: false,
  },
  petsAllow: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Room Category"],
    // enum: {
    //   value: ["King", "single", "Twins"],
    //   message: "Please select correct category Room",
    // },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Room || mongoose.model("Room", roomSchema);

import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.DB_LOCAL_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Connecting to mongoDB"))
    .catch((err) => console.log(err));
};

export default dbConnect;

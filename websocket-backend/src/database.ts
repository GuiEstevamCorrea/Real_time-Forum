import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.set("strictPopulate", false);

export async function connect() {
  try {
    const connection = await mongoose.connect(
      "mongodb://172.17.0.2:27017/websocket"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err.message);
  }
}

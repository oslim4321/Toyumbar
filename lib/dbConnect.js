import mongoose from "mongoose";

async function dbConnect() {
  return mongoose.connect(process.env.MONGODB_URI);
}

export default dbConnect;

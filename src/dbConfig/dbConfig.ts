import mongoose from "mongoose";
require("dotenv").config();
import { DB_NAME } from "@/constant/constant";
export async function connect() {
  try {
    mongoose.connect(`${process.env.MONGO_URI!}/${DB_NAME}`);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection Error,please make sure DB is up and running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("SomeThing went Wrong connecting to DB");
    console.log(error);
    process.exit();
  }
}

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connect to db");

const handleError = error => console.log(`❌ Error on connect DB ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

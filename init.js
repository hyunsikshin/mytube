import "./db";
import dotenv from "dotenv";
import app from "./app";
import "./models/Comment";
import "./models/User";
import "./models/Video";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`listein port ${PORT}`);

app.listen(PORT, handleListening);

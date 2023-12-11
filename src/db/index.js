import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
console.log(DB_NAME);
const connectDB = async ()=> {
    try {
       const connectionInstance = await mongoose.connect(`mongodb+srv://bvinay9198:Vinay123@cluster0.5dx8izk.mongodb.net/${DB_NAME}`);
       console.log(`\n MongoDB connection !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}

export default connectDB
import mongoose from "mongoose";
import "dotenv/config";

const { MONGO_URI } = process.env


const dbConnect = async () => {
    if(MONGO_URI) {
        await mongoose.connect(MONGO_URI);
    }
}

export default dbConnect;
import mongoose from "mongoose";
import { Config } from ".";

const URI = Config.DB_URI

console.log(URI)

export const db = async () => {
    await mongoose.connect(URI!)
    console.log('DB connected...')
}
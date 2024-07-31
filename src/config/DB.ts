import mongoose from "mongoose"
import { environmentVariable } from "../env/environment";


const URI:any = environmentVariable.mongodb_string;

export const DBconnect = () =>{
    try {
        const connect = mongoose.connect(URI);
        console.log("MongoDB connected ");
    } catch (error) {
        console.log(error)
    }
}
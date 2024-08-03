import mongoose from "mongoose";
import { user } from "../utils/Interfaces";


interface Iuser extends user, mongoose.Document {}

const UserSchema:any = new mongoose.Schema<user>(
    {
        username: {
             type: String, 
             required: true
             },
             email: {
                type: String,
                required: true,
                lowercase: true,
                trim: true,
                unique: true,
                match: [
                    /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                    "Please enter a valid email address.",
                  ],
             },
             password: {
                type: String,
                required: true,
             },
             googleId: {
                type: String,
             },
    },
    {timestamps:true}
)

export default mongoose.model<Iuser>("User", UserSchema);
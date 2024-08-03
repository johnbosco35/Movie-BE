import mongoose from "mongoose";
import { movie } from "../utils/Interfaces";

interface Imovie extends movie, mongoose.Document {}

const MovieSchema:any = new mongoose.Schema<movie>(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        genre:{
            type:String,
            required:true
        },
        releaseDate:{
            type:Date,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
    },
    {timestamps:true}
)

export default mongoose.model<Imovie>('Movie', MovieSchema)
import { NextFunction, Request, Response } from "express";
import MovieModel from "../model/MovieModel";


export const createMovie = async (req:Request, res:Response, next:NextFunction) =>{
    try {
        const {title, description, genre, releaseDate, rating} = req.body;
        const newMovie = new MovieModel({
            title,
            description,
            genre,
            releaseDate,
            rating,
        })
        await newMovie.save();
        return res.status(200).json({
            message:'Movie Created Successfully',
            data: newMovie
        })
    } catch (error:any) {
        return res.status(500).json({
            message: error.message,
        })
    };
}

export const getMovies = async (req:Request, res:Response, next:NextFunction) =>{
    try {
        const movies = await MovieModel.find()
        return res.status(200).json({
            message:'Movies fetched successfully',
            data: movies
        })
    } catch (error:any) {
        return res.status(500).json({
            message: error.message,
        })
    };
}

export const getMovieById = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
    try {
        const {MovieID} = req.params
        const movie = await MovieModel.findById(MovieID)
        if(!movie){
            res.status(404).json({
                message: 'Movie not found',
            })
        }
         res.status(200).json({
            message: 'Movie found',
            data: movie
         })
    } catch (error:any) {
         res.status(500).json({
            message: error.message
        })
    }
}

export const updateMovie = async (req:Request, res:Response,next:NextFunction) =>{
    try {
        const {title, description, genre, releaseDate, rating} = req.body;
        const {MovieID} = req.params;
        const UpdateMovie = await MovieModel.findByIdAndUpdate(MovieID,{title,description,genre,releaseDate,rating},{new:true});
        if (!UpdateMovie) return res.status(404).json({
            message: 'Movie not found',
        }) 
        return res.status(200).json({
            message: 'Movie updated successfully',
            data: UpdateMovie,
        })
    } catch (error:any) {
        return res.status(500).json({
            message: error.message,
        })
    }
}

export const deleteMovie = async (req:Request, res:Response, next:NextFunction) =>{
    try {
        const {MovieID} = req.params
        const DeleteMovie = await MovieModel.findByIdAndDelete(MovieID);
        if (!DeleteMovie) return res.status(404).json({
            message: 'Movie not found',
        })
        return res.status(200).json({
            message: 'Movie deleted',
            data: DeleteMovie,
        })
    } catch (error:any) {
        return res.status(500).json({
            message: error.message,
        })
    }
}
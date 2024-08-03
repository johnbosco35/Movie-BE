import { NextFunction, Request, Response } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import UserModel from "../model/UserModel";
import { environmentVariable } from "../env/environment";

export const registerUser = async(req:Request, res:Response,next:NextFunction) =>{
    
    try {
        const {usermane, email, password} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new UserModel({
            username:usermane,
            email:email,
            password:hashedPassword
        })
        await newUser.save()
       return res.status(201).json({message:"User created successfully"})

    } catch (error:any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const LoginUser = async (req:Request, res:Response): Promise<void> =>{
    try {
        const {email,password} = req.body;
        const user:any = await UserModel.findOne({email});
        if (!user) {
            res.status(400).json({message:"User not found"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            res.status(400).json({message:"Invalid password"})
        }
        const token = jwt.sign({ id: user._id }, environmentVariable.JWT_SECRET as string,{expiresIn: '1h'} )
         res.status(200).json({
            message: "User logged in successfully",
            data: token,
        })

    } catch (error:any) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const getAllUsers = async (req:Request, res:Response, next:NextFunction) =>{
    try {
        const allUsers = await UserModel.find()

       return res.status(200).json({
            message: "Users fetched successfully",
            data: allUsers,
        })
    } catch (error:any) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const findOneUser = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
    try {
        const {userID} = req.params;
        const user = await UserModel.findById(userID)

         res.status(200).json({
            message: "Found Successfully",
            data: user,
        })

    } catch (error:any) {
        res.status(500).json({
            message: error.message
        })
    }
}
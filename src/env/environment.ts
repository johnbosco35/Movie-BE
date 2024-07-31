import dotenv from "dotenv";

dotenv.config();

export const environmentVariable = {
    port: process.env.port!,
    mongodb_string: process.env.mongoDB_string! as any,
    JWT_SECRE: process.env.JWT_SECRE!,
}
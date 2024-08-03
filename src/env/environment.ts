import dotenv from "dotenv";

dotenv.config();

export const environmentVariable = {
    port: process.env.port!,
    mongodb_string: process.env.mongoDB_string! as any,
    JWT_SECRE: process.env.JWT_SECRE!,
    client_id: process.env.client_id!,
    clientSecret: process.env.clientSecret!,
    callbackUrl2: process.env.callbackUrl2!,
}
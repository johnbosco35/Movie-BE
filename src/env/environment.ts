import dotenv from "dotenv";

dotenv.config();

export const environmentVariable = {
    port: process.env.port!,
    mongodb_string: process.env.mongodb_string! as any,
}
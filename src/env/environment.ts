import dotenv from "dotenv";

dotenv.config();

export const environmentVariable = {
    port: process.env.port!,
    mongodb_string: process.env.mongoDB_string! as any,
    JWT_SECRE: process.env.JWT_SECRE!,
    client_id: process.env.client_id!,
    clientSecret: process.env.clientSecret!,
    callbackUrl2: process.env.callbackUrl2!,
    callbackUrl: process.env.callbackUrl!,
    google_id: process.env.google_id!,
    google_secret: process.env.google_secret!,
    google_refreshtoken: process.env.google_refreshtoken!,
    accessToken: process.env.accessToken!,
    google_redirect: process.env.google_redirect!,
    github_secret: process.env.github_secret!,
    github_id: process.env.github_id!,
    cloud_name: process.env.cloud_name!,
    api_key: process.env.api_key!,
    api_secert: process.env.api_secert!,
}
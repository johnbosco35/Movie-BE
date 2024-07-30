import express,{Application} from "express"
import { environmentVariable } from "./src/env/environment"




const app:Application = express()

const port:Number | any = process.env.port

const server = app.listen(environmentVariable.port,() =>{
console.log("Server is now on")
})

process.on("unhandledRejection", (error:any) =>{
    console.log("unhandledRejection",error);
    process.exit(1);
});
process.on("uncaughtException", (reason:any) =>{
    console.log("uncaughtException",reason);

    server.close(()=>{
        process.exit(1);
    })
})



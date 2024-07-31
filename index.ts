import express,{Application} from "express"
import { environmentVariable } from "./src/env/environment"
import { DBconnect } from "./src/config/DB"



const app:Application = express()

const port:Number | any = environmentVariable.port

const server = app.listen(port,() =>{
console.log("Server is now on ")
DBconnect()

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



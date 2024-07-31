import express, {Application, Request, Response} from "express"
import cors from "cors";
import passport from "passport";
import session from "express-session"
import helmet from "helmet";
import morgan from "morgan"

export const Mainapp = (app: Application) =>{
    app.use(express.json()).use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false},
    }));
    
    app.get("/", (req: Request, res: Response) =>{
        return res.status(200).json({
            message: "Server is still active🚀🚀🚀"
        });
    });
    
    app.get("/google", (req:Request, res:Response) =>{
        res.send(`<a href= "/veri/google">Authenicate with google</a>`);
    })

    
}
import { Router } from "express";
import { findOneUser, getAllUsers, LoginUser, registerUser } from "../controller/authController";


const router = Router();

router.post('/register',registerUser);
router.post('/login',LoginUser);
router.get('/allusers',getAllUsers)
router.get('/oneUser/:userID',findOneUser)
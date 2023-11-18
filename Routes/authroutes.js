import { Router } from "express";
import { Login, Register } from "../Controllers/Auth.Controllers.js";

const authroutes = Router();

authroutes.post('/login', Login);
authroutes.post('/register', Register);

export default authroutes;
import express from "express";
import {signUp,signIn, existingUser} from "../controllers/AuthenticationController";
import passport from "passport";
import "../services/passport";

const router = express.Router();
const signinStrategy = passport.authenticate("signinStrategy", { session: false });
//reference to the controllers
router.post("/api/signup",signUp );
router.post("/api/checkexists", existingUser);
router.post("/api/signin", signinStrategy, signIn);


export default router;

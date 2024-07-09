import express from 'express';
import { login, logout, signup, verifyOtp } from '../controllers/user.controller.js';
import { signupRouteValidator } from '../validators/request.validator.js';
import checkAuth from '../middlewares/check-auth.middleware.js';
import rToken from '../controllers/refresh.controller.js';

const route = express.Router();


route.post('/check', (req,res)=>{
    try {
        return res.status(200).json({status:200,message:"successfully! welcome to hosting api's"})
    } catch (error) {
        return res.status(500).json({message:"faild "})
    }
})
route.post("/signup", signupRouteValidator, signup)
route.post('/login', login)
route.post('/logout', logout)
route.post('/verify-otp', verifyOtp)
route.post('/refresh-token', rToken)

export default route
import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const protectRoute = async(req, res, next) =>{
    try {
        const token = req.cookies.jwt;

        if(!token){
            res.status(401).json({
                Message: "Unauthorized - No token Provided",
                Success: false,
            })
        };
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            res.status(500).json({
                Message: "Error in login API",
                Success: false,
            })
        };

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            res.status(500).json({
                Message: "Error in login API",
                Success: false,
            })
        };

        req.user = user;

        next();
    } catch (error) {
        console.log("Error in Login API", error.message)
        res.status(500).json({
                Message: "Error in Authentication API",
                Success: false,
            })
    }
}
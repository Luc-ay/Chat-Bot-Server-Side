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
        }
    } catch (error) {
        
    }
}
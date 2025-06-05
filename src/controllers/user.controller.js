import User from './../models/User.js';
import bcrypt from 'bcryptjs';
import { generateToken } from './../lib/utils.js';


export const userProfile = async (params) => {}
export const updateProfile = async (params) => {}


export const logoutUser = async (req,res) => {
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({
                Message: "Logout Successfully",
                Success: true,
            })
    } catch (error) {
        console.log("Error in Logout API", error.message)
        res.status(500).json({
                Message: "Error in logout API",
                Success: false,
            })
    }
}
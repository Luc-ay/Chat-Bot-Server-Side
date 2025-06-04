import User from './../models/User.js';
import bcrypt from 'bcryptjs';
import { generateToken } from './../lib/utils.js';

export const registerUser = async (req,res) => {
    const {fullName, email, password, username} = req.body
    try {
        if(!fullName || !email || !password || ! username){
            return res.status.json({
                Message: 'all field is required',
                Success: false,
            })
        }

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                Message: 'Email already exist',
                Success: false
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName, 
            email, 
            password: hashedPassword
        })

        // Token for authurization

        if(newUser){
            generateToken(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }else(
            res.status(400).json({
                Message: "Invalid user data"
            })
        )
    } catch (error) {
        res.status(500).json({
            Message: "Internal Server Error",
            error: error.message
        })
    }
}
export const loginUser = async (req,res) => {
    res.json('Welcome to Development login User')
}
export const logoutUser = async (req,res) => {
    res.json('Welcome to Development Logout User')
}
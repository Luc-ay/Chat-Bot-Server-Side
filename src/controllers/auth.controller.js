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
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                Message: "invalid credentials",
                Success: false,
            })
        };

        const passwordMatch = await bcryt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(404).json({
                Message: "invalid credentials",
                Success: false,
            })
        }

        generateToken(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        })
    } catch (error) {
        console.log("Error in Login API", error.message)
        res.status(500).json({
                Message: "Error in login API",
                Success: false,
            })
    }
}

import User from './../models/User.js';
import bcrypt from 'bcryptjs';

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
            
        }
    } catch (error) {
        
    }
}
export const loginUser = async (req,res) => {
    res.json('Welcome to Development login User')
}
export const logoutUser = async (req,res) => {
    res.json('Welcome to Development Logout User')
}
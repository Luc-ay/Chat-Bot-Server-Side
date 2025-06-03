import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        minlength: 2,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be atleast 6']
    },

},{timestamps: true});

const User = mongoose.model("User", userSchema );

export default User;
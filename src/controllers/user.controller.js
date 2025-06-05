import User from './../models/User.js';
import cloudinary from './../lib/cloudinary.js';


export const userProfile = async (req,res) => {
    try {
        const userId = req.params.id;

        if(!userId){
            return res.status(400).json({ 
                Message: 'User ID is required.', 
                Success: false, 
            });
        }

         const user = await User.findById(userId).select('-password');

        if (!user) {
            return res.status(404).json({ 
                Message: 'User not found.', 
                Success: false, 
            });
    }   

    return res.status(200).json({
        Success: true, 
        data: user,
    })
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error.',

         });
    }
}
export const updateProfile = async (req,res) => {
    try {
        const {profilePic} = req.body;
        const userId = req.user._id;

        if(!profilePic){
            return res.status(400).json({
                Message: "Profile pic is required",
                success: false,
            })
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updateUser = await User.findByIdandUpdate(
            userId,
            {profilePic: uploadResponse.secure_url},
            {new: true}
        );

        res.status(200).json(updateUser)
    } catch (error) {
        console.log("error in update profile", error)
        res.status(500).json({
            message: "Internal server error",
            success: true,
        })
    }
}


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
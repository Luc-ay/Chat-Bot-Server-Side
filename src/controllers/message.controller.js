import User from "../models/User.js";
import Message from './../models/message.model.js';

export const getUserForSideBar = async (req,res) =>{
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in get Users", error.message);
        res.status(500).json({Message: 'Error in get Users', error: error.message })
    }
}

export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params
        const myId = req.user._id;
        
        const messages = await Message.find({
            $or:[
                {senderId:myId, receiverId: userToChatId},
                {senderid: userToChatId, receiverId: myId},
            ],
        });

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in get Users messages", error.message);
        res.status(500).json({Message: 'Error in get Users messages', error: error.message })
    }
}
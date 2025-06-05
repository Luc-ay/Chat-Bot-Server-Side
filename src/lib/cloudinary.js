import { v2 } from "cloudinary";

import { config } from "dotenv";
config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUSINARY_API_KEY,
    api_secret: process.env.CLOUSINARY_API_SECRET,

})

export default cloudinary;
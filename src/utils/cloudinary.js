import { v2 as cloudinary } from 'cloudinary'
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloud = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        //file has been uploaded 
        console.log("file is uploaded on cloudinary", response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //REMOVE THE LOCALY SAVED FILE AS THE UPLOAD OPERATION GET FAILED
        return null;
    }
}

export {uploadOnCloud}
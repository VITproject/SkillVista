require("dotenv").config();

const fs = require("fs");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dglpjgwnm",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const uploadOnCloudinary = async (localFilePath, courseName, subjectName) => {
    try {
        if (!localFilePath) {
            throw new Error("No file provided");
        }
        const timestamp = new Date().toISOString().replace(/[:.]/g, "");
        let folderPath;
        if (courseName && subjectName) {
            courseName = courseName.trim().toLowerCase();
            subjectName = subjectName.trim().toLowerCase();
            folderPath = `${courseName}/${subjectName}/`;
        } else {
            folderPath = `unknown/subjects/`;
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "video",
            use_filename: true,
            unique_filename: false,
            folder: folderPath,
            public_id: timestamp
        });
        fs.unlinkSync(localFilePath);
return response.url;
    } catch (error) {
    console.error("Upload to Cloudinary failed:", error);
    throw error;
}
};
module.exports = { uploadOnCloudinary };
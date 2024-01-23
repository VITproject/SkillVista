require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dglpjgwnm",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "video",
      use_filename: true,
    });
    return response.url;
  } catch (error) {
    console.log("Upload to Cloudinary failed:", error);
    throw error;
  }
};
module.exports = { uploadOnCloudinary };

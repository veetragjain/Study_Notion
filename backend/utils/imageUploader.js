import { v2 as cloudinary } from 'cloudinary';

const uploadImageToCloudinary = async (file, folder, height, quality) => {
    try {
        const options = { folder }
        if (height) {
            options.height = height
        }
        if (quality) {
            options.quality = quality
        }
        options.resource_type = "auto"
        return await cloudinary.uploader.upload(file.tempFilePath, options);
    } catch (err) {
        console.log(`not able to upload file on cloudinary ${err}`)
    }
}
export default uploadImageToCloudinary;
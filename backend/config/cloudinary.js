import cloudinary from "cloudinary";

const cloudinaryConnect = () => {
    try {
        cloudinary.v2.config({
            //!    ########   Configuring the Cloudinary to Upload MEDIA ########
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true,
        });
        console.log("connected to cloudinary")
    } catch (err) {
        console.log(`unable to connect in cloudinary ${err}`);
    }
};

export default cloudinaryConnect;
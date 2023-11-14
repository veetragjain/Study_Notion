import express from 'express';
const FRONTEND_URL = process.env.FRONTEND_URL

import dbconnection from './config/database.js';
import cloudinaryConnect from './config/cloudinary.js';
import courseRoutes from './routes/course.js';
import paymentRoutes from './routes/payment.js';
import profileRoutes from './routes/profile.js';
import userRoutes from './routes/user.js';
import contactRoutes from './routes/contact.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import 'dotenv/config'


const PORT = process.env.PORT || 4001

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true
    })
)
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
)
// cloudinary connect
cloudinaryConnect()

// routes
app.use("/api/v1/auth", userRoutes)
app.use("/api/v1/profile", profileRoutes)
app.use("/api/v1/course", courseRoutes)
app.use("/api/v1/payment", paymentRoutes)
app.use("/api/v1/reach", contactRoutes)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the API"
    })
});
app.listen(PORT, () => {
    console.log(`server started on port no. ${PORT}`);
})

dbconnection()
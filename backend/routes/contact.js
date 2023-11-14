import express from 'express';
const router = express.Router()
import contactUsController from '../controllers/contactUs.js';

router.post("/contact", contactUsController)

export default router;
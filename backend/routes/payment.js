// Import the required modules
import express from 'express';

const router = express.Router()

import { capturePayment, verifyPayment, sendPaymentSuccessEmail } from '../controllers/payment.js';
import { auth, isInstructor, isStudent, isAdmin } from '../middleware/auth.js';
router.post("/capturePayment", auth, isStudent, capturePayment)
router.post("/verifyPayment", auth, isStudent, verifyPayment)
router.post("/sendPaymentSuccessEmail", auth, isStudent, sendPaymentSuccessEmail);
export default router;

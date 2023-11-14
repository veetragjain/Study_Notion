import express from 'express';
const router = express.Router()
import { auth, isInstructor } from '../middleware/auth.js';

import {
    updateProfile,
    deleteAccount,
    getEnrolledCourses,
    updateDisplayPicture,
    getAllUserDetails,
    instructorDashboard,
} from '../controllers/profile.js';


// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

// routes for getting all the user information for particular user
router.get("/getUserDetails", auth, getAllUserDetails)
// routes of update the profile
router.put("/updateProfile", auth, updateProfile)
// routes for delete the account
router.delete("/deleteAccount", auth, deleteAccount)

// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)

export default router;

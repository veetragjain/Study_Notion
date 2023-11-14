// Import the required modules
import express from 'express';

const router = express.Router()

// Import the Controllers

// Course Controllers Import
import {
    createCourse,
    showAllCourses,
    getCourseDetail,
    editCourse,
    getInstructorCourses,
    deleteCourse,
    getFullCourseDetails,
} from '../controllers/course.js';

// Categories Controllers Import
import { showAllCategory, createCategory, categoryPageDetail } from '../controllers/category.js';

// Sections Controllers Import
import { createSection, updateSection, deleteSection } from '../controllers/section.js';

// Sub-Sections Controllers Import
import { createSubSection, updateSubSection, deleteSubSection } from '../controllers/subSection.js';

// Rating Controllers Import
import { createRating, getAverageRating, getAllRatingAndReview } from '../controllers/ratingAndReview.js';

import { updateCourseProgress } from '../controllers/courseProgress.js';

// Importing Middleware
import { auth, isInstructor, isStudent, isAdmin } from '../middleware/auth.js';

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth, isInstructor, createCourse)
// Get all Registered Courses
router.get("/getAllCourses", showAllCourses)
// get all course detail
router.post("/getCourseDetails", getCourseDetail)
// update course detail
router.put("/editCourse", editCourse)
// fetch all course created by instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
// Delete a Course
router.delete("/deleteCourse", auth, isInstructor, deleteCourse)
// 
router.post("/getFullCourseDetails", auth, getFullCourseDetails)

//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection)
// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection)
// Delete a Section
router.delete("/deleteSection", auth, isInstructor, deleteSection)
// Edit Sub Section
router.put("/updateSubSection", auth, isInstructor, updateSubSection)
// Delete Sub Section
router.delete("/deleteSubSection", auth, isInstructor, deleteSubSection)
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection)

router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategory)
router.get("/getCategoryPageDetails", categoryPageDetail)

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth, isStudent, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRatingAndReview)

export default router;
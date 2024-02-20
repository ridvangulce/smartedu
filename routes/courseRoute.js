const express = require('express');
const courseController = require('../controllers/courseController.js');

const router = express.Router();

router.route('/').post(courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:id').get(courseController.getCourseDetail);

module.exports = router;

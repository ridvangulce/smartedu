const Course = require('../models/Course.js');

exports.createCourse = async (req, res) => {
   const course = await Course.create(req.body);
   try {
      res.status(201).json({
         status: 'success',
         course,
      });
   } catch (error) {
      return res.status(400).json({
         status: 'fail',
         message: error,
      });
   }
};

exports.getAllCourses = async (req, res) => {
   const courses = await Course.find();
   try {
      res.status(200).render('courses', {
         courses,
         page_name: 'courses',
      });
   } catch (error) {
      return res.status(400).json({
         status: 'fail',
         message: error,
      });
   }
};

exports.getCourseDetail = async (req, res) => {
   const course = await Course.findById({ _id: req.params.id });
   try {
      res.status(200).render('course', {
         course,
         page_name: 'courses',
      });
   } catch (error) {
      return res.status(400).json({
         status: 'fail',
         message: error,
      });
   }
};

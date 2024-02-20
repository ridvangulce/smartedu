const Course = require('../models/Course.js');
const Category = require('../models/Category.js');

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
   try {
      const categorySlug = req.query.categories;
      const category = await Category.findOne({ slug: categorySlug });
      let filter = {};
      if (categorySlug) {
         filter = { category: category._id };
      }
      const courses = await Course.find(filter);
      const categories = await Category.find();

      res.status(200).render('courses', {
         courses,
         categories,
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
   const course = await Course.findOne({ slug: req.params.slug });
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

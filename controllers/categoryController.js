const Category = require('../models/Category.js');

exports.createCategory = async (req, res) => {
   const category = await Category.create(req.body);
   try {
      res.status(201).json({
         status: 'success',
         category,
      });
   } catch (error) {
      return res.status(400).json({
         status: 'fail',
         message: error,
      });
   }
};

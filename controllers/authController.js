const User = require('../models/User.js');
const bcrypt = require('bcrypt');
exports.createUser = async (req, res) => {
   try {
      const user = await User.create(req.body);
      res.status(201).json({
         status: 'success',
         user,
      });
   } catch (error) {
      return res.status(400).json({
         status: 'fail',
         message: error,
      });
   }
};

exports.loginUser = async (req, res) => {
   try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
         return res.status(401).json({ message: 'Invalid password' });
      }

      // User Session
      res.status(200).json({ message: 'Logged In' });
   } catch (error) {
      return res.status(400).json({
         status: 'fail',
         message: error.message,
      });
   }
};

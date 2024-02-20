const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute.js');
const courseRoute = require('./routes/courseRoute.js');

const app = express();

//Connect DB

mongoose
   .connect('mongodb://localhost/smartedu-db')
   .then(() => {
      console.log('Database Connected');
   })
   .catch((err) => {
      console.error(err);
   });

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routers
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 5001;
app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});

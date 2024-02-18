const express = require('express');
const pageRoute = require('./routes/pageRoute.js');
const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routers
app.use('/', pageRoute);

const port = 5001;
app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');

const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routers
app.get('/', (req, res) => {
   res.status(200).render('index', {
      page_name: 'index',
   });
});
app.get('/about', (req, res) => {
   res.status(200).render('about', {
      page_name: 'about',
   });
});

const port = 5001;
app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});

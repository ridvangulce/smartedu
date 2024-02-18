const express = require('express');

const app = express();
const port = 5001;

app.use(express.json()); // for parsing application/json
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
   res.status(200).send('Welcome!');
});

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});

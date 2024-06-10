const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// const session = require('express-session')
// uncomment when ready to use 
// Update the value for routes to correct path
const route = require('./controllers/example-route')
const sequelize = require('sequelize')
const app = express();
const hbs = exphbs.create({});
const port = 3000

/**handlebars code setup */
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
  
// Express code set up
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// For CSS styling
app.use (express.static(path.join(__dirname, 'public' )));

// Route set up
app.use(route);

// sequelize setup
sequelize.sync({force: false}).then(() => {
    console.log(`Example app listening on port ${port}`)
});
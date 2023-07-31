var express = require('express');
var app = express();
var path = require('path');
var portfolioRoutes = require('./routes/portfolioRoutes'); 
var adminRoute = require('./routes/adminRoute'); 

var dotenv = require('dotenv').config();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.json());

// Use the routes defined in routes.js
app.use('/', portfolioRoutes);
app.use('/', adminRoute);
app.listen(process.env.PORT, function() {
    console.log('Example app listening on port ' + process.env.PORT +'!');
});

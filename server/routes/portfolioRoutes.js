var express = require('express');
var router = express.Router();
var path = require('path');

//Main Routes
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..','..','client','pages','home.html'));
});
router.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '..','..','client','pages','about.html'));
});
router.get('/blog', function(req, res) {
    res.sendFile(path.join(__dirname, '..','..','client','pages','blog.html'));
});
router.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname, '..','..','client','pages','projects.html'));
});

module.exports = router;

var express = require('express');
var router = express.Router();
var path = require('path');

//Main Routes
router.get('/admin', function(req, res) {
    res.sendFile(path.join(__dirname, '..','..','client','pages','admin','admin.html'));
});

module.exports = router;

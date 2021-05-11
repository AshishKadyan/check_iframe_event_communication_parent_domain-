var express = require('express');
var router = express.Router();
const request = require('request');


/* GET home page. */
router.get('/', async function(req, res, next) {

    res.render('index2', { title: 'Express' });
});

module.exports = router;

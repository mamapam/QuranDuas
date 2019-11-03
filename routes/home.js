// Setup
var express = require('express');
var router = express.Router();
var apiData = require('../apiData');

// Global variable
var cachedData;
var formattedData = [];

// GET: /home
// Gets the home page
router.get('/', function(req, res) {
  if(cachedData == undefined) {
    console.log('in here');
    apiData.getAllData().then(function(returned) {
      returned.forEach(function(obj) {
        formattedData.push(JSON.parse(obj));
      });
      cachedData = formattedData;
      res.render('home', {allData: formattedData});
    });
  } else {
    res.render('home', {allData: cachedData});
  }
});
//////////////////////////////////////////////////

module.exports = router;

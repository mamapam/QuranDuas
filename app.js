// Setup 
var express = require('express'),
    app     = express();
//////////////////////////////////////////////////


// App configurations
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//////////////////////////////////////////////////


// Require Routes
var homeRoutes = require('./routes/home');
//////////////////////////////////////////////////


// Setup Routes
app.get('/', function(req, res) {
  res.redirect('/home');
});

app.use('/home', homeRoutes);
//////////////////////////////////////////////////


// Listen
app.listen(process.env.PORT || 3000);
//////////////////////////////////////////////////
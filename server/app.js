const express = require('express')
var hbs = require( 'express-handlebars');
const app = express()

app.use(express.static('../public'));
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

app.get('/', function (req, res) {
  res.render('home', {layout: 'default'});
});

app.get('/clients', function (req, res) {
  res.render('clients', {layout: 'default'});
});


app.get('/about-us', function (req, res) {
  res.render('about-us', {layout: 'default'});
});


app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
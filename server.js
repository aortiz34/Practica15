var express = require('express');
var app = express(); 
var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false}))

app.set('view engine', 'ejs');

app.get('/',  function (req, res) {
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
    <body><h1>Hello World!</h1></body></html>`);
});

app.get('/person/:id', function(req, res) {
    res.render('person',{ID: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.get('/student', (req, res) => {
    res.render('index');
})

app.post('/student', (req, res) => {
    res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`);
})

app.listen(port);
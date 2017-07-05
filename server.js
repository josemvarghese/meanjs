var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dbConfig = require('./config/db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

// var index = require('./routes/index');
// var tasks = require('./routes/tasks');
var login = require('./routes/login');


var port = 3000;
var app = express();
// require('./routes/index')(app);
// require('./routes/tasks')(app);
// require('./routes/index')(app);

// view engine
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs');
// app.engine('html',require('ejs').renderFile);



// Set static folder

app.use(express.static(path.join(__dirname,'client')));



// Body parser middileware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
// TODO - Why Do we need this key ?
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);
// var index = require('./routes/index');
var tasks = require('./routes/tasks')(passport);
var login = require('./routes/login')(passport);


app.use('/api',tasks);
app.use('/api',login);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

// app.use('/',index);

app.listen(port, function() {
	console.log('server running '+port);
});





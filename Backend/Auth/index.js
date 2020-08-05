var express         = require('express'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local'),
    LocalMongoose   = require('passport-local-mongoose'),
    User            = require('./models/user');

mongoose.connect("mongodb://localhost:27017/auth_demo", {useNewUrlParser: true, useUnifiedTopology: true});

var app = express();
app.use(require('express-session')({
    secret: 'I am confident and I will make it!',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile("index.html");
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/public/Signup.html");
});

app.post('/register', (req, res) => {
    User.register({username: req.body.username}, req.body.password, (err, user) => {
        if(err)   return res.redirect('/register');
        else{
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secret');
            });
        }
    });
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), (req, res) => {});

app.get('/secret', isLoggedIn, (req, res) => {
    res.sendFile(__dirname + '/Routes/secret.html');
});

app.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.redirect('/');
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}
app.listen(3000, (req, res) => {
    console.log("Server started");
});
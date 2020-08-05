var express         = require('express')
var app             = express()
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var User            = require('./models/user.js');
var passport        = require('passport');
var LocalStrategy   = require('passport-local');
var PassportMongoose = require('passport-local-mongoose');
var seedDb          = require('./seeds');
var campgroundRoute = require('./routes/campground');
var authRoute       = require('./routes/auth');
var commentRoute    = require('./routes/comment');

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

seedDb();
app.use(require('express-session')({
    secret: "I am confident still and will remain so!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
    res.locals.usr = req.user;
    next();
});

app.get("/", function(req, res){
    res.render("landing");
});

app.use('/campgrounds', campgroundRoute);
app.use(authRoute);
app.use('/campgrounds/:id/comments', commentRoute);

app.listen(3000, function(){
    console.log("YelpCamp Server started");
})

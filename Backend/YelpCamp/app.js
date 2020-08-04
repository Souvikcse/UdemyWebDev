var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./models/comment.js');
var seedDb = require('./seeds');

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var Campground = require('./models/campground');

seedDb();
app.get("/", function(req, res){
    res.render("landing");
});
app.get('/campgrounds', function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err)   console.log(err);
        else{
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
});
app.post('/campgrounds', function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.desc;
    Campground.create({name: name, image: image, description: desc}, function(err, newlycreated){
        if(err)   console.log(err);
        else{
            console.log("New Campground");
            console.log(newlycreated);
        }
    })
    res.redirect("/campgrounds");
});
app.get('/campgrounds/new', function(req, res){
    res.render("new");
})

app.get('/campgrounds/:id', function(req, res){
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundcampground){
        if(err)    console.log(err);
        else{
            console.log(foundcampground);
            res.render("show", {campground: foundcampground});
        }
    })
});

// ====================================
// Comments Routes
// ====================================





app.listen(3000, function(){
    console.log("YelpCamp Server started");
})

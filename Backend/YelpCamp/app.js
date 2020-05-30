var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String, 
    description: String
});
var Campground = mongoose.model("Campground", campgroundSchema);
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
    Campground.findById(req.params.id, function(err, foundcampground){
        if(err)    console.log(err);
        else{
            res.render("show", {campground: foundcampground});
        }
    })
})
app.listen(3000, function(){
    console.log("YelpCamp Server started");
})

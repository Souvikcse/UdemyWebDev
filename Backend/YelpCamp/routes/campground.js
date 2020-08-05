var express = require('express');
var router = express.Router();

var Campground = require('../models/campground');

router.get('/', function(req, res){
    // console.log(req.user);
    Campground.find({}, function(err, allCampgrounds){
        if(err)   console.log(err);
        else{
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    })
});
router.post('/', function(req, res){
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
router.get('/new', function(req, res){
    res.render("campgrounds/new");
})

router.get('/:id', function(req, res){
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundcampground){
        if(err)    console.log(err);
        else{
            console.log(foundcampground);
            res.render("campgrounds/show", {campground: foundcampground});
        }
    })
});

module.exports = router;
var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
var campgrounds = [ {name: "Little Boy", image: "https://images.freeimages.com/images/small-previews/c23/hello-3-1564990.jpg"},
                    {name: "Delicate Arch", image: "https://images.freeimages.com/images/small-previews/1f8/delicate-arch-1-1391746.jpg"},
                    {name: "Rain on sea", image: "https://images.freeimages.com/images/small-previews/3a6/rain-on-sea-ii-1368899.jpg"},
                    {name: "Little Boy", image: "https://images.freeimages.com/images/small-previews/c23/hello-3-1564990.jpg"},
                    {name: "Delicate Arch", image: "https://images.freeimages.com/images/small-previews/1f8/delicate-arch-1-1391746.jpg"},
                    {name: "Rain on sea", image: "https://images.freeimages.com/images/small-previews/3a6/rain-on-sea-ii-1368899.jpg"},
                    {name: "Little Boy", image: "https://images.freeimages.com/images/small-previews/c23/hello-3-1564990.jpg"},
                    {name: "Delicate Arch", image: "https://images.freeimages.com/images/small-previews/1f8/delicate-arch-1-1391746.jpg"},
                    {name: "Rain on sea", image: "https://images.freeimages.com/images/small-previews/3a6/rain-on-sea-ii-1368899.jpg"} ];
app.get("/", function(req, res){
    res.render("landing");
});
app.get('/campgrounds', function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});
app.post('/campgrounds', function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    campgrounds.push({name: name, image: image});
    res.redirect("/campgrounds");
});
app.get('/campgrounds/new', function(req, res){
    res.render("new");
})

app.listen(3000, function(){
    console.log("YelpCamp Server started");
})

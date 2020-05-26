var express = require('express')
var app = express()

app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("landing");
});
app.get('/campgrounds', function(req, res){
    var campgrounds = [{name: "Little Boy", image: "https://images.freeimages.com/images/small-previews/c23/hello-3-1564990.jpg"},
                       {name: "Delicate Arch", image: "https://images.freeimages.com/images/small-previews/1f8/delicate-arch-1-1391746.jpg"} ];
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function(){
    console.log("YelpCamp Server started");
})

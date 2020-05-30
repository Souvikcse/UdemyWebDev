var express     = require('express'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

var   app       = express();
mongoose.connect("mongodb://localhost:27017/restful_blog", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE MODEL SCHEMA
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

//RESTFUL ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
});
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err)    console.log(err);
        else{
            res.render("index", {blogs: blogs});
        }
    })
});


app.listen(3001, function(){
    console.log("Server has started");
})
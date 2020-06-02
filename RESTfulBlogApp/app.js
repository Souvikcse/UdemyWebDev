var express        = require('express'),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    methodOverride = require('method-override');

var app = express();
mongoose.connect("mongodb://localhost:27017/restful_blog", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

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
app.get("/blogs/new", function(req, res){
    res.render("new");
});
app.post("/blogs", function(req, res){
    var title = req.body.blog.title;
    var image = req.body.blog.image;
    var body = req.body.blog.body;
    //create a blog
    Blog.create({title: title, image: image, body: body}, function(err){
        if(err){
            res.render("new");
        }
        else{
            res.redirect("/blogs");
        }
    });
    //redirect to all blogs page
});
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err)   res.redirect("/blogs");
        else{
            res.render("show", {blog: foundBlog});
        }
    })
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        if(err)   alert("All parameters not valid");
        else{
            res.render("edit", {blog: blog});
        }
    })
});
app.put("/blogs/:id", function(req, res){
    Blog.updateOne({_id: req.params.id}, req.body.blog, function(err){
        if(err)    res.redirect("/blogs");
        else{
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//DESTROY ROUTE
app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndDelete(req.params.id, function(err){
        if(err)   res.redirect("/blogs/"+req.params.id);
        else{
            res.redirect("/blogs");
        }
    })
    
});
app.listen(3001, function(){
    console.log("Server has started");
})
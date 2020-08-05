var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Effi", 
        image: "https://images.freeimages.com/images/small-previews/f2c/effi-1-1366221.jpg",
        description: "Very Cute. Very loving and very loyal. Very hungry too Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptates saepe tempora perspiciatis in illum explicabo sapiente odit animi fugiat rerum libero assumenda optio accusamus, reiciendis eligendi doloribus nobis, vero quae est laborum a ea! Quibusdam magnam modi qui ratione quasi earum eos unde quod vitae quas. Facere dicta error molestiae quibusdam. Reiciendis, minima pariatur voluptates blanditiis animi ex cum."
    },
    {
        name: "Desert Mesa", 
        image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "One of the most exotic locations in the world Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptates saepe tempora perspiciatis in illum explicabo sapiente odit animi fugiat rerum libero assumenda optio accusamus, reiciendis eligendi doloribus nobis, vero quae est laborum a ea! Quibusdam magnam modi qui ratione quasi earum eos unde quod vitae quas. Facere dicta error molestiae quibusdam. Reiciendis, minima pariatur voluptates blanditiis animi ex cum."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptates saepe tempora perspiciatis in illum explicabo sapiente odit animi fugiat rerum libero assumenda optio accusamus, reiciendis eligendi doloribus nobis, vero quae est laborum a ea! Quibusdam magnam modi qui ratione quasi earum eos unde quod vitae quas. Facere dicta error molestiae quibusdam. Reiciendis, minima pariatur voluptates blanditiis animi ex cum."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.deleteMany({}, function(err){
            if(err)  throw err;
            console.log("Removed all comments");
            // data.forEach(function(seed){
            //     Campground.create(seed, function(err, campground){
            //         if(err){
            //             console.log(err)
            //         } else {
            //             console.log("added a campground");
            //             //create a comment
            //             Comment.create(
            //                 {
            //                     text: "This place is great, but I wish there was internet",
            //                     author: "Homer"
            //                 }, function(err, comment){
            //                     if(err){
            //                         console.log(err);
            //                     } else {
            //                         campground.comments.push(comment);
            //                         campground.save();
            //                         console.log("Created new comment");
            //                     }
            //                 });
            //         }
            //     });
            // });
        })
         //add a few campgrounds
    }); 
    //add a few comments
}

module.exports = seedDB;
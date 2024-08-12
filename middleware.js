const wrapAsync = require("./utils/wrapAsync");
const mongoose = require('mongoose');
const List = require("./models/listing.js");
const Review = require('./models/review.js');
const User = require('./models/user.js');




module.exports.isLogedIn = (req,res,next)=>{
    if(!req.isAuthenticated())
    {
        req.session.redirectUrl = req.originalUrl ;
        
        
       
        //this is used beacause as we login then i should enter into the webpage i wanted i.e
        //suppose i click on new listing and i was not loggedin then it will redirect me to the login page and as i succesfully logged in i was redirecting
        // to the listings page but actually after succesfully loggedin it should go the new listing url 
        console.log("Redirection URL- ",req.session.redirectUrl);
        
        req.flash("error","You must be logged-in.");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl)
    {
    res.locals.redirectUrl = req.session.redirectUrl;
    }
    else
    {
        res.locals.redirectUrl="/listings";
    }
       
    next();
}

module.exports.isOwner = wrapAsync(async(req,res,next)=>{
    let {id} = req.params;
    let listing =await List.findById(id);
    if(!listing.owner._id.equals(req.user._id))
    {
        req.flash("error","You don't have permission.");
        return res.redirect(`/listings/${id}`);
    }
    next();
});

module.exports.isAuthor = async(req,res,next)=>{
    let {id,id2} = req.params;
    let r1 =await Review.findById(id2);
    if(r1 && req.user)
    {
        if(!r1.author.equals(res.locals.currUser._id))
        {
           req.flash("error","You don't have permission.");
           return res.redirect(`/listings/${id}`);
        }
        next();
    }
    else
    {
        req.flash("error","You don't have permission.");
        return res.redirect(`/listings/${id}`);
    }
}
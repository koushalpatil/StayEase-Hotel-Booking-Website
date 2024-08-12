const express = require('express');
const router = express.Router({mergeParams:true});
const mongoose = require('mongoose')
const Review = require('../models/review.js');
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const List = require("../models/listing.js");
const {isLogedIn} = require('../middleware.js');
const {isAuthor} = require('../middleware.js');
const reviewController = require('../controllers/review.js');

//adding reviews to the database
router.post("/",isLogedIn,wrapAsync(reviewController.createReview));


//this route is used to handle the error which comes if we try to delete the review without login(but actually we have implemented that without login and if we are not owner of the review then the delete button will not be visible
//but the problem is when someone sends request through hopscotch,postman)
router.get("/:id1",(req,res)=>{
    let {id} = req.params;
    res.redirect(`/listings/${id}`);
})

router.patch("/:id2",isLogedIn,isAuthor,wrapAsync(reviewController.editReview));

//deleting the reviews
router.delete("/:id2",isLogedIn,isAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
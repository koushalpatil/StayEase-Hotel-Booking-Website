const express = require('express');
const router = express.Router({mergeParams:true});
const mongoose = require('mongoose');
const Review = require('../models/review.js');
const List = require("../models/listing.js");
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const passport = require('passport');
const {isLogedIn,isOwner} = require('../middleware.js');
const listingController = require('../controllers/listings.js');
const multer  = require('multer');
const {storage} = require('../cloudConfig.js');//here we have extracted the location from clodConfig file where to save our images in cloudinary
// const upload = multer({ storage });//this will upload the files to the storage(cloudinary location where the files will be stored)
const upload = multer({ 
    storage: storage, 
    limits: { fileSize: 1024 * 1024 * 50 }, // Optional: set file size limit (5MB here)
}); // Expect 'images' field with a max of 30 files
//Display all listings
router.get("/",wrapAsync(listingController.index));



router.post("/:id/book",isLogedIn,wrapAsync(listingController.handleBooking));


router.get("/:id/book",wrapAsync(listingController.handlebookingerror));

//Displaying map from index.js
router.get("/show/map",(wrapAsync(listingController.showMap)));

//Showing multiple images from the show route
router.get("/:id/images",wrapAsync(listingController.images));

//Home page icon filters
router.get("/filters/:filter",listingController.filters);

//Sending form to create a new list
router.get("/new",isLogedIn,listingController.renderNewForm);

//form for editing individual listing
router.get("/:id/edit",isLogedIn,isOwner,wrapAsync(listingController.renderEditForm));

//Display individual hotels
router.get("/:id",wrapAsync(listingController.showListing));

//Adding the new list to DB
//upload.single('image') this will extract the image from the submitted form and with the help of upload function it will upload the files to the given location
router.post("/",isLogedIn,upload.array('image', 30),wrapAsync(listingController.createListing));

//Editing actually in database
router.put("/:id",isLogedIn,isOwner,upload.array('image', 30),wrapAsync(listingController.editListing));

//deleting the listings
router.delete("/:id",isLogedIn,isOwner,wrapAsync(listingController.deleteListing));


//seacrching bar in index.js
router.post("/search",wrapAsync(listingController.search));


module.exports = router;
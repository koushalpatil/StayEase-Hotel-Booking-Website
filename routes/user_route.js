const express = require('express');
const router = express.Router({mergeParams:true});
const mongoose = require('mongoose');
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const User = require('../models/user.js');
const passport = require('passport');
const {saveRedirectUrl} = require('../middleware.js');
const userController = require('../controllers/user.js');
const {isLogedIn} = require('../middleware.js');



router.get("/signup",userController.renderSignUpForm);

//signup form
router.post("/signup",wrapAsync(userController.signUp));

router.post("/reset-password",wrapAsync(userController.resetPassword));


//sending email for verifcation of forgot password and rendering the otp form
router.post("/verify2",wrapAsync(userController.forgotPassword));


//verifing the opt of forgot password
router.post("/forgot-password",wrapAsync(userController.otpVerifyForgotPassword));

router.get("/verify/:id",userController.getList);


router.post("/enquiry",wrapAsync(userController.enquiryHandling));


//verify post request
router.post("/verify",wrapAsync(userController.verify));

//verification before reservation
router.post("/verify/:id",isLogedIn,wrapAsync(userController.verify1));


//resend otp
router.get("/resend/:id",wrapAsync(userController.resend));

//Handling invalid otp
router.get("/invalid",userController.invalid);

//handling invalid otp for the verification before reservation
router.get("/invalid1/:id",userController.invalid1);


router.get("/invalid2",(req,res)=>{
    res.render('user/forgot-password.ejs');
})





router.get("/reservations",isLogedIn,wrapAsync(userController.showreservations));

router.get("/login",userController.renderLoginForm);

router.get("/favourites",isLogedIn,wrapAsync(userController.showFavourites));

router.post("/favourites",isLogedIn,wrapAsync(userController.addfavourite));

router.post("/login",saveRedirectUrl,passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),wrapAsync(userController.login));

router.get("/logout",userController.logout);

router.get("/my-properties",isLogedIn,wrapAsync(userController.showproperties));

router.get("/profile",isLogedIn,wrapAsync(userController.showprofile));

router.get("/edit-profile",isLogedIn,wrapAsync(userController.renderEditProfileForm));

router.patch("/edit-profile/:field",isLogedIn,wrapAsync(userController.editProfile));

router.delete("/cancel/:id",isLogedIn,wrapAsync(userController.cancelBooking));

module.exports = router;
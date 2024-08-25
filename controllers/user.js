const User = require('../models/user.js');
const List = require('../models/listing.js');
const { use } = require('passport');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const generateOTP = require('../generateOTP.js');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user:process.env.SMTP_MAIL ,
      pass: process.env.SMTP_PASSWORD,
    },
});



//OTP VERFICATION BEFORE  signing up 
function verifyMail(req) {
    return new Promise((resolve, reject) => {
        let subject = 'OTP for StayEase!';
        const otp = generateOTP();
        let message = `
Hi ${req.session.tempData.username},
        
Thank you for signing up with StayEase! To complete your registration, please enter the OTP (One-Time Password) below:
        
Your OTP is: ${otp}
        
If you didn't initiate this request, please ignore this email.
        
Best regards,
The StayEase Team
        
        `;
        
        

        var mailOptions = {
            from: process.env.SMTP_MAIL,
            to: req.session.tempData.email,
            subject: subject,
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                req.session.tempData.otp = otp;
                console.log("Email sent successfully.");
                resolve(otp);
            }
        });
    });
}


//Email for the otp verfication before reservation
function verifyMail1(email,subject,message,otp) {
    return new Promise((resolve, reject) => {
        

        
  

        
        

        var mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: subject,
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
               
                console.log("Email sent successfully.");
                resolve(otp);
            }
        });
    });
}





module.exports.getList = (req,res)=>{
    let {id} = req.params;
    res.redirect(`/listings/${id}`);
}

module.exports.verify = async (req, res, next) => {
    let data = req.body;
    req.session.tempData = data;

    try {
        const otp = await verifyMail(req);
        console.log("Temp data from user after verifyMail - ", req.session.tempData);
        res.render('user/otp.ejs');
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
}

module.exports.verify1 = async (req, res, next) => {
    let data = req.body;
    let {id} = req.params;
    req.session.tempData = data;
    const user = await User.findById(req.user.id);
    const otp = generateOTP();
   
    
    req.session.tempData.otp = otp;

    let subject = 'OTP for StayEase Reservation Confirmation!';

    let message = `
    Hi ${user.username},
    
    Thank you for choosing StayEase! To confirm your reservation, please enter the OTP (One-Time Password) below:
    
    Your OTP is: ${otp}
    
    If you didn't initiate this request, please ignore this email.
    
    Best regards,
    The StayEase Team
    `;

    try {
        const response = await verifyMail1(user.email,subject,message,otp);
        console.log("Temp data from user after verifyMail - ", req.session.tempData);
        res.render('user/otp(reservation).ejs',{id});
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
}


module.exports.forgotPassword = async(req,res)=>{
    const {email} = req.body;
    const otp = generateOTP();
    console.log("otp is from forgot password - ",otp);
    if (!req.session.tempData) {
        req.session.tempData = {};
    }
    req.session.tempData.otp = otp;
    let subject = 'Your OTP for Password Reset - StayEase';
    let message = `

We received a request to reset the password for your account associated with this email address. To proceed with the password reset, please use the following One-Time Password (OTP):

    Your OTP: ${otp}

    This OTP is valid for the next 10 minutes. If you did not request a password reset, please ignore this email or contact our support team immediately.

    Thank you for using StayEase.

    Best regards,
    The StayEase Team
`;


    const response = await verifyMail1(email,subject,message,otp);
    res.render('user/otp(forgot-password)');
}

module.exports.otpVerifyForgotPassword = async(req,res)=>{
    let otp = req.body.first + req.body.second + req.body.third + req.body.forth + req.body.fifth + req.body.sixth;
        if (otp !== req.session.tempData.otp) {
            console.log("Invalid otp");
            req.flash("error", "Invalid OTP, please try again!");
            return res.redirect('/invalid');
        }
        delete req.session.tempData;
        res.render('user/forgot-password.ejs');
}


module.exports.resetPassword = async (req, res) => {
    let { username, password } = req.body;

    try {
        let user = await User.findOne({ username: username });

        if (!user) {
            req.flash("error", "Username does not exist");
            return res.redirect('/invalid2');
        }

        // Set and hash the new password
        user.setPassword(password, async function(err) {
            if (err) {
                req.flash("error", "Error resetting password");
                return res.redirect('/invalid2');
            }

            try {
                await user.save();
                await passwordResetConfirmation(user.email, user.username);
                
                res.redirect('/login');
            } catch (mailErr) {
                req.flash("error", mailErr.message);
                res.redirect('/signup');
            }
        });
    } catch (err) {
        req.flash("error", "An error occurred while resetting the password");
        res.redirect('/invalid2');
    }
};


module.exports.resend = async (req, res, next) => {
    try {
        let {id} = req.params;
        const user = await User.findById(req.user.id);
        req.flash("success","OTP resend to email.");
        const otp = generateOTP();
        const subject = 'OTP for StayEase';
        let message = `
        Hi ${req.session.tempData.username},
                
        Thank you for signing up with StayEase! To complete your registration, please enter the OTP (One-Time Password) below:
                
        Your OTP is: ${otp}
                
        If you didn't initiate this request, please ignore this email.
                
        Best regards,
        The StayEase Team
                
                `;
        const response = await verifyMail1(user.email,subject,message,otp);
        console.log("Temp data from user after verifyMail - ", req.session.tempData);
       
        res.render('user/otp(reservation).ejs',{id});
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
}


module.exports.invalid = (req,res)=>{
    res.render('user/otp.ejs');
}

module.exports.invalid1 = (req,res)=>{
    res.render('user(reservation)/otp.ejs');
}

module.exports.signUp = async (req, res, next) => {
    try {
        let otp = req.body.first + req.body.second + req.body.third + req.body.forth + req.body.fifth + req.body.sixth;
        console.log("Temp data from signUp - ", req.session.tempData);
        if (otp !== req.session.tempData.otp) {
            console.log("Invalid otp");
            
            req.flash("error", "Invalid OTP, please try again!");
            return res.redirect('/invalid');
        }

        let { username, email, password } = req.session.tempData;
        delete req.session.tempData;
        let newUser = new User({ username: username, email: email });
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, async (err) => {
            if (err) {
                return next(err);
            }

            try {
                await greetingMail(email, username);
                req.flash("success", `Welcome ${username} to Wanderlust!`);
                res.redirect('/listings');
            } catch (mailErr) {
                req.flash("error", mailErr.message);
                res.redirect('/signup');
            }
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

//MAIL FOR GREETING AFTER SIGNUP
function greetingMail(email, username) {
    return new Promise((resolve, reject) => {
        let subject = 'Welcome to StayEase!';

        let message = `
Dear ${username},

Welcome to StayEase!

Thank you for signing up with us. We're excited to have you on board and look forward to helping you find the perfect hotel for your next stay. Here are some of the things you can do on our website:

- Search for hotels by location, date, and amenities.
- View detailed descriptions, photos, and reviews of hotels.
- Book your stay quickly and securely.
- Manage your bookings and view your booking history.

To get started, simply log in to your account at www.stayease.com.

If you have any questions or need assistance, our customer support team is here to help. You can reach us at support@stayease.com or 1-800-123-4567.

Thank you for choosing StayEase. We hope you have a wonderful experience with us!

Best regards,

The StayEase Team

www.stayease.com
Follow us on Facebook, Twitter, and Instagram
        `;

        var mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: subject,
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Email sent successfully.");
                resolve(info);
            }
        });
    });
}



function passwordResetConfirmation(email, username) {
    return new Promise((resolve, reject) => {
        let subject = 'Your Password Has Been Reset - StayEase';

        let message = `
Dear ${username},

This email is to confirm that your password has been successfully reset for your StayEase account.

If you did not request a password reset or if you believe this change was made in error, please contact our support team immediately at support@stayease.com.

To log in to your account, visit www.stayease.com and use your new password.

Thank you for using StayEase. We are committed to ensuring your experience with us remains secure and enjoyable.

Best regards,

The StayEase Team

www.stayease.com
Follow us on Facebook, Twitter, and Instagram
        `;

        var mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: subject,
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Email sent successfully.");
                resolve(info);
            }
        });
    });
}







module.exports.renderSignUpForm = (req,res)=>{

    res.render("user/signup.ejs");
}





module.exports.addfavourite = async(req,res)=>{
   let {id} = req.body;
   let user = await User.findById(req.user._id);

   
   if(!user.favourites.includes(id))
    {
    user = await User.findByIdAndUpdate(req.user._id,{ $push: { favourites: id } },{ new: true, useFindAndModify: false });
   
    }
    else
    {
        let index = user.favourites.indexOf(id);
        user.favourites.splice(index,1);
        await user.save();
    }
}





module.exports.showreservations = async(req,res)=>{
    let currUser = req.user;
    let user = await User.findById(currUser._id).populate("bookings.listing").exec();
    let bookings = user.bookings;
    
    // logic for showing status as expired as the checkout date is less than current date
    for(let booking of bookings)
    {
        if(new Date(booking.checkOutDate) < new Date())
        {
            booking.status = "Expired";
        }
    }

    await user.save();

    res.render("user/reservations.ejs",{user});
}

module.exports.showprofile = async(req,res)=>{
    let user = "";
    if(req.user)
    {
     user = await User.find({_id:req.user._id});
    }
    user = user[0];
    let now = new Date();
    const diffInMs = now - user.createdAt;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    console.log("total days: ",diffInDays);
    res.render("user/profile.ejs",{user,diffInDays});
}

module.exports.showproperties = async(req,res)=>{
    let listings = await List.find({owner:req.user._id});
    
    let m1 = "There are no properties registered by you at the moment.";
    let m2=  "Please add new listings or check back later for updates.";
    let heading = "Properties";
    let favourites ="";
    if(req.user)
    {
        favourites = req.user.favourites;
    }
    res.render("user/favourites.ejs",{listings,heading,m1,m2,favourites});
}

module.exports.showFavourites = async (req,res)=>{
    let listings = await List.find({_id:{$in: req.user.favourites}});
    let m1 = "Your favorites list is currently empty.";
    let m2 = "Start exploring and add hotels to your favorites!";
    let heading = "Wishlist";
    let favourites ="";
    if(req.user)
    {
        favourites = req.user.favourites;
    }
    res.render("user/favourites.ejs",{listings,m1,m2,heading,favourites});
}


module.exports.editProfile = async (req, res) => {
    let { field } = req.params;
    let value = req.body[field];
    let update = {};
    update[field] = value;

    try {
        let user = await User.findByIdAndUpdate(req.user._id, update, { new: true });
        res.redirect("/edit-profile");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}


module.exports.renderLoginForm = (req,res)=>{
    res.render("user/login.ejs");
}

module.exports.login = async(req,res)=>{
    req.flash("success","Welcome back to Wanderlust!");
    res.redirect(res.locals.redirectUrl);
}

module.exports.renderEditProfileForm = async(req,res)=>{
    let user = "";
    if(req.user)
    {
        user =await User.find({_id:req.user._id}).populate("favourites");
        user = user[0];
    }
    res.render("user/edit_profile.ejs",{user})
}

module.exports.logout = (req,res,next)=>{
    req.logOut((err)=>
    {
        if(err)
        {
            return next(err);
        }
        req.flash("success","You logged-out succesfully.");
        res.redirect("/listings");
    })
}



module.exports.cancelBooking = async(req,res)=>{
    let {id} = req.params;

    const user = await User.findById(req.user._id).populate('bookings.listing').exec();

    let booking = user.bookings.find((booking)=>(booking._id.equals(id)));
    let {checkInDate,checkOutDate,listing} = booking;

    user.bookings.pull({ _id: id });


    let list = await List.findById(listing);
    let userId = user._id;


    const bookingIndex = list.bookings.findIndex(
        (booking) =>
          booking.checkInDate === checkInDate &&
          booking.checkOutDate === checkOutDate &&
          userId.equals(booking.user)
      );

    list.bookings.splice(bookingIndex,1);

    await list.save();
    await user.save(); 

    res.redirect("/reservations");
}
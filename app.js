if(process.env.NODE_ENV != "production")
{
require('dotenv').config();
}
const axios = require('axios');
const instance = axios.create({
  timeout: 20000, // Increase timeout to 10 seconds
});
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const List = require("./models/listing.js");
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const listRoute = require('./routes/list_route.js');
const reviewRoute = require('./routes/review_route.js');
const userRoute = require('./routes/user_route.js');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStartegy = require('passport-local');
const User = require('./models/user.js');

app.engine('ejs',ejsMate);
app.use(methodOverride('_method'));
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session(
    {
        secret:"secretcode",
        saveUninitialized:true,
        resave:false,
        cookie:{
            expires:Date.now()+7*24*60*60*1000,
            maxAge:7*24*60*60*1000,
            httpOnly:true
        }
    }
));


//Implementing passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStartegy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(flash());
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.get("/",(req,res)=>{

  res.render("listings/home.ejs");
})


//Handling routes
app.use("/listings",listRoute);
app.use("/listings/:id/reviews",reviewRoute);
app.use("/",userRoute);


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
.then((res)=>{
    console.log("DB connection succesful.");
})
.catch((err)=>{ 
    console.log(err);
})
async function main()
{
    await mongoose.connect(MONGO_URL);
}

const port = 3000;
app.listen(port,()=>{
    console.log("Server is listening at port ",port);
})



//Universal Route
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not found."));
})

//error handler
app.use((err,req,res,next)=>{
    let {status = 500,message} = err;
    console.log(err);
    res.status(status);
    res.render("listings/error.ejs",{err});
})
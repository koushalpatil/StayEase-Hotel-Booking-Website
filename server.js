const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');



app.use(flash());
app.use(session(
    {
        secret:"mysecretcode",
        resave:false,
        saveUninitialized:true
    }
));

app.get("/register",(req,res)=>{
    let {name="anonymous"} = req.query;
    req.session.name=name;
    req.flash("success","Successfully Registered");
    res.redirect("/greet");
});

app.get("/greet",(req,res)=>{
    res.send(`Hii,Welcome ${req.session.name} to your website`);
})

const port = 8080;
app.listen(port,()=>{
    console.log("Server is listening at port ",port);
});

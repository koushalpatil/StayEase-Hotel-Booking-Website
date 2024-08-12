const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    favourites:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'List'
    }],
    
    dob:{
        type:Date
    },
    phoneno:
    {
        type:Number
    },
    city:{
        type:String
    },
    country:
    {
        type:String,
        
    },
    p_room:
    {
        type:String,
        enum:["single","double","suite"]
    },
    preference:
    {
        type:String,
        enum:["smoking","non-smoking"]
    },
    p_bed:
    {
        type:String,
        enum:["king","queen","twin"]
    },
    work:
    {
        type:String
    },
    fav_song:
    {
        type:String
    },
    language:
    {
        type:String
    },
    checkInDates:
    {
        type:[String]
    },
    checkOutDates:
    {
        type:[String]
    },
    bookings:[{
        checkInDate:{
            type:String
        },
        checkOutDate:
        {
            type:String
        },
        listing:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'List'
        },
        nights:
        {
            type:Number
        },
        time:
        {
            type:String
        },
        status:
        {
            type:String
        },
        pay:{
            type:Number
        }
    }],
    
},{ timestamps: true });

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User',userSchema);
module.exports = User;
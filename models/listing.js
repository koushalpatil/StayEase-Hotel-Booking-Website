const mongoose = require('mongoose');
const wrapAsync = require('../utils/wrapAsync.js');
const Review = require('./review.js');
const User = require('./user.js');
const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50,
        index: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 500,
        trim: true
    },
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: [{
            type: String,
            default: "https://files.sitebuilder.name.tools/0b/bc/0bbc24d4-2b11-493c-b338-17d4b5dba385.jpg",
            set:(v)=>
            {
                return v==="" ? "https://files.sitebuilder.name.tools/0b/bc/0bbc24d4-2b11-493c-b338-17d4b5dba385.jpg": v
            },
        }]
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        },
        properties:{
            id:{
                type:Number
            },
            location:{
                type:String
            },
            country:{
                type:String
            },
            phoneno:{
                type:Number
            },
            name:
            {
                type:String
            },
            price:{
                type:Number
            },
            img:{
                type:String
            },
            category:
            {
                type:String
            },
            o_id:
            {
                type:mongoose.Schema.Types.ObjectId
            }
        }
    },
    category:
    {
        type:String,
        required:true,
        enum:["Trending","Rooms","Iconic cities","Beachfront","Mountains","Amazing pool","Camping","Farms","Arctic","Domes","Skiing"],
    },
    rating:
    {
        type:Number,
        default:0
    },
    essentials:
    {
        type:[String],
        required:true,
    },
    max_guest:
    {
        type:Number,
        required:true,
    },
    bedrooms:
    {
        type:Number,
        required:true
    },
    bathrooms:
    {
        type:Number,
        required:true
    },
    kitchen:
    {
        type:String,
        required:true
    },
    beds:
    {
        type:Number,
        required:true
    },
    king:
    {
        type:Number,
        required:true
    },
    queen:
    {
        type:Number,
        required:true
    },
    twin:
    {
        type:Number,
        required:true
    },
    bathroomType:
    {
        type:String,
        enum:["Shared","Separate"],
    },
    bookings:[
        {
            checkInDate:{
                type:String,
            },
            checkOutDate:{
                type:String
            },
            user:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ]
    // checkInDates:
    // {
    //     type:[String],
    // },
    // checkOutDates:
    // {
    //     type:[String]
    // }
    
}, { timestamps: true });

//mongoose middleware for when i  delete the listings then their reviews should also be deleted and favourites from user should also be deleted
listingSchema.post("findOneAndDelete",async function(data){
    console.log("mongoose middleware triggered.");
    if(data)
    {
        await Review.deleteMany({_id:{$in:data.reviews}});
    }
    let users = await User.find({});
    
    let bulkOps = [];
    for (let user of users) {
        if (user.favourites.includes(data._id)) {
            let index = user.favourites.indexOf(data._id);
            user.favourites.splice(index, 1);
            bulkOps.push({
                updateOne: {
                    filter: { _id: user._id },
                    update: { $set: { favourites: user.favourites } }
                }
            });
        }
    }
    
    if (bulkOps.length > 0) {
        await User.bulkWrite(bulkOps);
    }
});

List = mongoose.model("List",listingSchema);
module.exports = List;
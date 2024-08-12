const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    rating:
    {
        type:Number,
        required:true,
        min:[1,'Rating cannot be less than 1'],
        max:[5,'Rating cannot be greater than 5']
    },
    author:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
},{ timestamps: true });



module.exports = mongoose.model("Review",reviewSchema);
const Review = require('../models/review.js');
const List = require('../models/listing.js');
const ExpressError = require('../utils/ExpressError.js');

module.exports.createReview = async(req,res,next)=>{
    let review = req.body;
    let r1 = new Review({comment:review.comment,rating:review.rating});
    r1.author = req.user._id;
    r1.createdAt = Date.now();
    let list = await List.findById(req.params.id).populate('reviews');
   
    if(list)
    {
        // list.reviews.push(r1);
        list.reviews.splice(0, 0, r1);
        await r1.save();
        
        console.log(r1);
        let sum = 0;
        for(let review of list.reviews)
        {
            sum+=review.rating;
        }
        if(list.reviews.length !== 0)
        {
            let rat = (sum / list.reviews.length).toFixed(1);
            list.rating = rat;
        }
        
        await list.save();
        req.flash("success","Review added!");
        res.redirect(`/listings/${req.params.id}`);

    }
    else
    {
        next(new ExpressError(400,"Invalid Id for adding review"));
    }
}

module.exports.editReview = async (req,res)=>{
    let {id,id2} = req.params;

    let review = await Review.findById(id2);
    review.comment = req.body.review;
    await review.save();
    res.redirect(`/listings/${id}`);
}


module.exports.destroyReview = async (req, res, next) => {
    let { id, id2 } = req.params;

    let list = await List.findById(id).populate("reviews");
    if (!list) {
        return next(new ExpressError(404, "Listing not found."));
    }

    let reviews_arr = list.reviews;
    let index = -1;
    for (let i = 0; i < reviews_arr.length; i++) {
        if (reviews_arr[i]._id.equals(id2)) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        let deletedReview = await Review.findByIdAndDelete(id2);
        console.log("Deleted review is ", deletedReview);

        if (!deletedReview) {
            return next(new ExpressError(404, "Review to be deleted not found."));
        }

        list.reviews.splice(index, 1);

        
        let sum = 0;
        for (let review of list.reviews) {
            sum += review.rating;
        }

        if (list.reviews.length !== 0) {
            let rat = (sum / list.reviews.length).toFixed(1);
            list.rating = rat;
        } else {
            list.rating = 0; 
        }

        await list.save();

        req.flash("success", "Review deleted!");
        res.redirect(`/listings/${id}`);
    } else {
        next(new ExpressError(404, "Review to be deleted not found in the listing."));
    }
};
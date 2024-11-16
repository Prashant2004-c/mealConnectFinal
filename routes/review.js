const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/Listing");
const Review = require("../models/reviews.js");
// const ExpressError = require("../utils/expressError.js");
// const {reviewSchema} = require("../schema.js");

// Review-Post route

router.post("/", async (req,res) =>{
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  req.flash("success","New review created !!!");

  res.redirect(`/listings/${listing._id}`);
});

// Review-Delete route

router.delete("/:reviewId", wrapAsync(async(req,res)=>{
  let {id,reviewId} = req.params;

  await Listing.findByIdAndUpdate(id,{$pull: {reviews : reviewId}});
  await Review.findByIdAndDelete(reviewId);
  req.flash("success","Review deleted !!!");

  res.redirect(`/listings/${id}`);
})
);

module.exports = router;
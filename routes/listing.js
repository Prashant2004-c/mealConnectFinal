const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/expressError.js");
const Listing = require("../models/Listing");
const passport = require("passport");
const listingController = require("../controllers/search.js");

router.get("/board", wrapAsync(async (req, res) => {
  res.render("listings/dashboard.ejs");
})
);

router.get("/details", wrapAsync(async (req, res) => {
  res.render("listings/details.ejs");
})
);

router.get("/navigations", wrapAsync(async (req, res) => {
  res.render("listings/routes.ejs");
})
);

//Index Route
router.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  if (req.user.role === "admin") {
    res.redirect("/listings/donor"); // Redirect to admin panel
  } else {
    res.redirect("/listings/shelter"); // Redirect to user page
  }
  // res.render("listings/donor.ejs", { allListings });
})
);


router.get("/index", wrapAsync(async (req, res) => {
  res.render("listings/index.ejs");
})
);

router.get("/donor", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/donor.ejs", { allListings });
})
);


router.get("/shelter", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/shelter.ejs", { allListings });
})
);


//New Route
router.get("/new", (req, res) => {
  // if(!req.isAuthenticated()){
  //   req.flash("error","Log in to create listings.");
  //   return res.redirect("/login");
  // }
  res.render("listings/new.ejs");
});

//Search
router.get("/search", wrapAsync(listingController.search));

router.route("/:id")
    .get(wrapAsync(listingController.showListing))

    
// //New Route
// router.get("/new", (req, res) => {
//   // if(!req.isAuthenticated()){
//   //   req.flash("error","Log in to create listings.");
//   //   return res.redirect("/login");
//   // }
//   res.render("listings/new.ejs");
// });

//Show Route
router.get("/:id",wrapAsync( async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  if(!listing){
    req.flash("error","Listing you requested for does not exist . ");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
})
);

//Create Route

// Error catching using wrapAsync

router.post("/", wrapAsync(async (req, res,next) => {
  if(!req.body.listing){
    throw new ExpressError(400,"Send valid data for listing");
  };
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  req.flash("success","New listing created !!!");
  res.redirect("/listings");
})
);


//Edit Route
router.get("/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if(!listing){
    req.flash("error","Listing you requested for does not exist . ");
    res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
})
);

//Update Route
router.put("/:id",wrapAsync( async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success","listing updated !!!");
  res.redirect(`/listings/${id}`);
})
);

//Delete Route
router.delete("/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success","listing deleted !!!");
  res.redirect("/listings");
})
);

// search

// router.get("/filter/:q", wrapAsync(listingController.filterListings));

// //Search
// router.get("/search", wrapAsync(listingController.search));

// router.route("/:id")
//     .get(wrapAsync(listingController.showListing))

module.exports = router;
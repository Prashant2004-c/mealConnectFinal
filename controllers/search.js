const Listing = require("../models/Listing");

// module.exports.filterListings = async (req, res, next) => {
//   const { q } = req.params;
//   const filteredListings = await Listing.find({city: q }).exec();
//   if (!filteredListings.length) {
//       req.flash("error", "No Listings exists for this filter!");
//       res.redirect("/listings");
//       return;
//   }
//   res.locals.success = `Listings Filtered by ${q}`;
//   res.render("listings/index.ejs", { allListings: filteredListings });
// }

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};


module.exports.search = async(req, res) => {
  console.log(req.query.q);
  let input = req.query.q.trim().replace(/\s+/g, " "); //remove start and end space
  console.log(input);
  if(input == "" || input == " "){
      //search value is empty
      req.flash("error", "Search value empty!!!");
      res.redirect("/listings");
  }

  //convert every word first letter capital and other small
  let data = input.split("");
  let element = "";
  let flag = false;
  for(let index = 0; index < data.length; index++) {
      if (index == 0 || flag) {
          element = element + data[index].toUpperCase();
      } else {
          element = element + data[index].toLowerCase();
      }
      flag = data[index] == " ";
  }
  console.log(element);

  let allListings = await Listing.find({
      name: { $regex: element, $options: "i"},
  });
  if(allListings.length !=0 ){
      res.locals.success = "Listings searched by name";
      res.render("listings/index.ejs", {allListings});
      return;
  }
  if(allListings.length == 0){
      allListings = await Listing.find({
          city: { $regex: element, $options: "i"},
      }).sort({_id: -1});
      if(allListings.length != 0) {
          res.locals.success = "Listings searched by city";
          res.render("listings/index.ejs", {allListings});
          return;
      }
  }
  if(allListings.length == 0) {
      allListings = await Listing.find({
          state: { $regex: element, $options: "i"},
      }).sort({_id: -1});
      if(allListings.length != 0) {
          res.locals.success = "Listings searched by state";
          res.render("listings/index.ejs", {allListings});
          return;
      }
  }
  if(allListings.length == 0) {
      allListings = await Listing.find({
          country: { $regex: element, $options: "i"},
      }).sort({_id: -1});
      if(allListings.length != 0) {
          res.locals.success = "Listings searched by country";
          res.render("listings/index.ejs", {allListings});
          return;
      }
  }

  const intValue = parseInt(element, 10); //10 for decimal return - int ya NaN
  const intDec = Number.isInteger(intValue); //check intValue is number or not

  if(allListings.length == 0 && intDec) {
      allListings = await Listing.find({ quantity: { $lte: element }}).sort({
          quantity: 1,
      });
      if(allListings.length != 0) {
          res.locals.success = `Listings searched for plates less than  ${element}`;
          res.render("listings/index.ejs", { allListings });
          return;
      }
  }
  if(allListings.length == 0) {
      req.flash("error", "Listings is not here !!!");
      res.redirect("/listings");
  }
}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review =require("./reviews.js");

// Dekh bhai yeh ek basic template ki tarah hai ki kaun kaunse inputs hongo aur kis data types ke 
const listingSchema = new mongoose.Schema({
  name:{
    type : String,
    required : true,
  },
  item: String,
  image : {
    type : String,
    filename:String,
    default:"https://imgmedia.lbb.in/media/2022/05/628d02abb244e5600088c718_1653408427183.jpg",
    // Samajh bhai yaha hum ek default image set karna chah rhe hai if there is no image then show it.
    // set : (v)=> v ==="" ? "https://imgmedia.lbb.in/media/2022/05/628d02abb244e5600088c718_1653408427183.jpg" : v,
  },
  quantity : Number,
  availability : String,
  street : String,
  city : String,
  state : String,
  country : String,
  reviews : [
    {
      type : Schema.Types.ObjectId,
      ref : "Review"
    },
  ],
});


// Deleting listing and handling their reviews

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await Review.deleteMany({_id: {$in:listing.reviews}});
  }
});


// Hum upar ke blue print ka use karke ek model prepare kar rhe hai
const Listing = mongoose.model("Listing",listingSchema);
// Phir hum created model ko export kar denge
module.exports = Listing;
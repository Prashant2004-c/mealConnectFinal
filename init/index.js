const mongoose = require("mongoose");
const initData = require("./data1.js");
const Listing = require("../models/Listing.js");
console.log(Listing);
// Connecting to mongodb database
const MONGO_URL = "mongodb://127.0.0.1:27017/mealConnect"
async function main(){
  await mongoose.connect(MONGO_URL);
};

main().then(()=>{
  console.log("Connection successful");
})
.catch((err)=>{
  console.log(err);
});

const initDB = async() =>{
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
// const express = require("express");
// const router = express.Router();
// const User = require("../models/user.js");
// // const wrapAsync = require("../utils/wrapAsync");
// const passport = require("passport");

// router.get("/signup", async(req, res) => {
//     res.render("users/signup.ejs");
// });

// router.post("/signup", async(req,res)=>{
//     try{
//         let {username, email, password} = req.body;
//         const newUser = new User({email, username});
//         const registeredUser = await User.register(newUser, password);
//         console.log(registeredUser);
//         req.flash("success", "welcome to wanderlust");
//         res.redirect("/listings");
//     }
//     catch(e){
//         req.flash("error",e.message);
//         res.redirect("/signup");
//     }
// });

// router.get("/login", async(req, res) => {
//     res.render("users/login.ejs");
// });

// router.post("/login",passport.authenticate("local",{ failureRedirect: '/login' ,failureFlash:true}), async(req,res)=>{
//     req.flash("success","Welcome back to wanderlust.");
//     res.redirect("/listings");
// });

// module.exports = router;

// routes/user.js
const express = require("express");
const router = express.Router();

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/login");
};

router.get("/dashboard", isAuthenticated, (req, res) => {
    res.render("dashboard", { user: req.user });
});

module.exports = router;
// routes/auth.js
const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const router = express.Router();

// Registration Route
router.get("/register", (req, res) => res.render("register"));
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  const newUser = new User({ username, password, role });
  await newUser.save();
  res.redirect("/auth/login");
});

// Login Route
router.get("/login", (req, res) => res.render("login"));

router.post("/login",
  passport.authenticate("local", { failureRedirect: "/auth/login", failureFlash: true }),
  async (req, res) => {
    try {
      // Check the authenticated user's role
      if (req.user.role === "admin") {
        res.redirect("/listings/donor"); // Redirect to admin panel
      } else {
        res.redirect("/listings/shelter"); // Redirect to user page
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Server error during login");
    }
  }
);


// Logout Route
router.get("/logout", (req, res) => {
  req.logout(() => res.redirect("/auth/login"));
});

module.exports = router;

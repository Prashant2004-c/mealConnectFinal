// routes/admin.js
const express = require("express");
const router = express.Router();

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") return next();
  res.status(403).send("Access Denied: Admins only");
};

router.get("/", isAdmin, (req, res) => {
  res.render("admin", { user: req.user });
});

module.exports = router;

// routes/index.js
const router = require("express").Router();
const userRoutes = require("./user-routes"); // Update the file path
const thoughtRoutes = require("./thought-routes"); // Update the file path

// Import and use your API route files
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;

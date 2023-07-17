const mongoose = require("mongoose");

const connectDB = mongoose.connect("mongodb://localhost:27017/socialnetwork", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit with failure
  });

module.exports = connectDB;

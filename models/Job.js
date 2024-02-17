const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Plaese provide your compoany name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide your positon"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["Interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);

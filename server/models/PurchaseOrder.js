// server/models/PurchaseOrder.js
const mongoose = require("mongoose");

const poSchema = new mongoose.Schema(
  {
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
    position: { type: mongoose.Schema.Types.ObjectId, ref: "Position" },
    manager: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PurchaseOrder", poSchema);

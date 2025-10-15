const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
    position: { type: mongoose.Schema.Types.ObjectId, ref: "Position" },
    recruiter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: [
        "Submitted",
        "Shortlisted",
        "Interview",
        "Offer",
        "Hired",
        "Rejected",
      ],
      default: "Submitted",
    },
    history: [
      {
        status: String,
        note: String,
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);

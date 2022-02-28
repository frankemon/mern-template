const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    // Relates the ID of the user to the goal
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    // Automatically adds timestamps
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);

const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goals");

const { protect } = require("../middleware/auth");

// @desc  Combine same routes into one chained route

// router.get("/", getGoals);
// router.post("/", setGoal);
router.route("/").get(protect, getGoals).post(setGoal);

// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;

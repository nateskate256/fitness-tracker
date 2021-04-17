const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
  day: Date,
  listOfExercises: [
    {
      name: String,
      type: String,
      weight: Number,
      sets: Number,
      reps: Number,
      duration: Number,
      distance: Number,
    },
  ],
});

const Fitness = mongoose.model("Fitness", FitnessSchema);

module.exports = Fitness;

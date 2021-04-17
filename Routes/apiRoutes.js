const router = require("express").Router();
const { Workout } = require("../models");


router.get("/api/workouts", (req, res) => {
  console.log("/api/workouts");
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Workout.updateOne({ _id: id }, { $push: { listOfExercises: body } })
  .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

router.post("/api/workouts", (req, res) => {
  const body = req.body;
  Workout.create(body)
  .then((data) => {
    res.json(data);
  })
  .catch((err) => console.log(err));
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => console.log(err));
});

module.exports = router;

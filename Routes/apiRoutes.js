const router = require("express").Router();
const { Workout } = require("../models");


router.get("/api/workouts", (req, res) => {
  console.log("/api/workouts");
  Workout.find()
    .then((data) => {
      console.log("*******")
    console.log(data)
      res.json(data);
    })
    .catch((err) => console.log(err));
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(id)
  console.log(body)
  Workout.updateOne({ _id: id }, { $push: { exercises: body } })
  .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

router.post("/api/workouts", (req, res) => {
  const body = req.body;
  console.log("inside post route:", req.body)
  Workout.create({})
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

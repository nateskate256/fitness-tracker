// ROUTING

const { Fitness } = require("../models");

const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  console.log("/api/workouts");
  Fitness.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Fitness.updateOne({ id: id }, { $push: { listOfExercises: body } }).then(
    (data) => {
      res.json(data);
    }
  );
  console.log("/api/workouts/:id");
});

router.post("/api/workouts", (req, res) => {
  const body = req.body;
  Fitness.create(body)
  .then((data) => {
    res.json(data);
  })
  .catch((err) => console.log(err));
});

router.get("/api/workouts/range", (req, res) => {
  Fitness.find()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => console.log(err));
});

module.exports = router;

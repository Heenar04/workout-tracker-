const db = require("../models");

module.exports = function (app) {
    // Show all workouts
app.get("/api/workouts", (req, res) => {
    db.Exercise.find({}).then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err)
    });
  })
  
  // Insert a workout
  app.post("/api/workouts", ({ body },res) => {
    db.Exercise.create(body).then((data) => {
      res.json(data);
    }).catch(err => {
        console.log(err);
      });
  })
  
  // Make an update to the current _id
  app.put("/api/workouts/:id", (req, res) => {
    db.Exercise.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((data) => { 
      res.json(data);
    }).catch(err => { 
      console.log(err)
    });
  });
}
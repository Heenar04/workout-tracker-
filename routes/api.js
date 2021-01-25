const db = require("../models");

module.exports = function (app) {
    // Show all workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err)
    });
  })
  
  // Insert a workout
  app.post("/api/workouts", (req,res) => {
    db.Workout.create({}).then((data) => {
      res.json(data);
    }).catch(err => {
        console.log(err);
      });
  })
  
  // Make an update to the current _id 
  app.put("/api/workouts/:id", ({body,params}, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
       {$push:{ exercises: body }}
    ).then((data) => { 
      res.json(data);
    }).catch(err => { 
      console.log(err)
    });
  });
}
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
  // for 7 days range 
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields:{
          totalduration : {
            $sum : "$exercises.duration"
          }
        }
      }
    ]).sort({_id : -1}).limit(7)    // limiting the object to 7 
    .then(data => {
      
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
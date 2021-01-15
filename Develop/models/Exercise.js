const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
        exercises: [
            {
              type: {
                type: String,
                required: true
              },
              name: {
                type: String,
                required: true
              },
              weight: {
                type: Number
              },
              sets: {
                type: Number
              },
              reps: {
                type: Number
              },
              duration: {
                type: Number
              },
              distance: {
                type: Number
              }
          }
        ]
      });


const Exercise = mongoose.model("exercise", ExerciseSchema);

module.exports = Exercise;

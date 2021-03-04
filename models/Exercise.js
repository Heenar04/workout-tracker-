const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: ()=> new Date(),},
    exercises: [ {
        type: {
          type: String,
          required: true,
          default: ""
        },
        name: {
          type: String,
          required: true,
          default: ""
        },
        weight: {
          type: Number,
          default: 0
        },
        sets: {
          type: Number,
          default: 0
        },
        reps: {
          type: Number,
          default: 0
        },
        duration: {
          type: Number,
          default: 0
        },
        distance: {
          type: Number,
          default: 0
        }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
});


const Exercise = mongoose.model("exercise", ExerciseSchema);

module.exports = Exercise;

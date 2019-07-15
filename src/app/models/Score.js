const mongoose = require('mongoose')
const moment = require('moment')

const ScoreSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
    unique: true
  },
  score: {
    type: Number,
    require: true
  },
  created_at: {
    type: Date,
    default: moment().format('YYYY-MM-DD')
  }
})

module.exports = mongoose.model('Score', ScoreSchema)

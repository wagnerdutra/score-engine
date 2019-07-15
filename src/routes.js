const routes = require('express').Router()
const validator = require('express-validation')
const handler = require('express-async-handler')

const ScoreController = require('./app/controllers/ScoreController')

const ScoreValidation = require('../src/app/validators/Score')

routes.post(
  '/createUserScore',
  validator(ScoreValidation.create),
  handler(ScoreController.create)
)

routes.post(
  '/computeUserScore',
  validator(ScoreValidation.update),
  handler(ScoreController.update)
)

module.exports = routes

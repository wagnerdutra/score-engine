const routes = require('express').Router()
const validator = require('express-validation')
const handler = require('express-async-handler')

const ScoreController = require('./app/controllers/ScoreController')
const MetricsController = require('./app/controllers/MetricsController')

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

routes.get('/getUserScore', handler(ScoreController.getUserScore))

routes.get('/health', handler(MetricsController.health))

routes.get('/ready', MetricsController.ready)

module.exports = routes

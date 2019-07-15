const app = require('../../src/server')
const request = require('supertest')

const createUserScore = userId =>
  request(app)
    .post('/createUserScore')
    .send({ userId })

const computeUserScore = (userId, score) =>
  request(app)
    .post('/computeUserScore')
    .send({ userId, score })

module.exports = { createUserScore, computeUserScore }

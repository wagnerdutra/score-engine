const joi = require('joi')

module.exports = {
  create: {
    body: {
      userId: joi.string().required()
    }
  },
  update: {
    body: {
      userId: joi.string().required(),
      score: joi.number().required()
    }
  }
}

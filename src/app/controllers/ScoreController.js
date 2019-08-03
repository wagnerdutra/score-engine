const Score = require('../models/Score')

class ScoreController {
  async create(req, res) {
    const { userId } = req.body
    if (await Score.findOne({ userId })) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }
    await Score.create({ userId, score: 0 })
    return res.json({ ok: true })
  }

  async update(req, res) {
    const { userId, score } = req.body
    const userScore = await Score.findOne({ userId })
    userScore.score = userScore.score + score
    return res.json(await userScore.save())
  }

  async getUserScore(req, res) {
    const userId = req.query.userId
    return res.json(await Score.findOne({ userId }))
  }
}

module.exports = new ScoreController()

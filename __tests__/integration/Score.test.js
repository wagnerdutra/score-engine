const { connect, disconnect, truncate } = require('../utils/dbHelper')
const { createUserScore, computeUserScore } = require('../utils/score')

describe('Score', () => {
  beforeAll(async () => {
    await connect()
    await truncate()
  })

  afterAll(() => disconnect())

  beforeEach(() => truncate())

  it('should create the score', async () => {
    const response = await createUserScore('1')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ ok: true })
  })

  it('should not insert the user more than once', async () => {
    await createUserScore('1')
    const response = await createUserScore('1')
    expect(response.status).toBe(400)
    expect(response.body).toEqual({ error: 'Usuário já existe' })
  })

  it('should compute the user score', async () => {
    await createUserScore('1')
    const response = await computeUserScore('1', 100)
    expect(response.status).toBe(200)
    expect(response.body.score).toBe(100)
  })
})

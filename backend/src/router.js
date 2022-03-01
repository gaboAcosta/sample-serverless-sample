

const express = require('express')
const { ensureAuthenticated } = require('./utils/auth')
const router = express.Router()
const usersRouter = require('./routes/usersRouter')
const healthRouter = require('./routes/healthRouter')
const authRouter = require('./routes/authRouter')
const sessionRouter = require('./routes/sessionRouter')

// This are public endpoints
router.use('/health', healthRouter)
router.use('/auth', authRouter)

// Every route after this middleware is passed will need a JWT token
router.use(ensureAuthenticated())
router.use('/session', sessionRouter)
router.use('/users', usersRouter)

module.exports = router

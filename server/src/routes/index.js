import Authentication from '../controllers/authentication'
import Middlewares from './middlewares'
import api from './api'
import docs from './docs'

const router = require('express').Router()

router.use('/api', Middlewares.loginRequired, api)
router.post('/signup', Authentication.signup)
router.post('/signin', Authentication.signin)
router.get('/ping', (req, res) => res.send('pong'))
router.get('/', (req, res) => res.json(docs))

export default router;
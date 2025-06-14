const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const briefRouter = require('./routes/brief')
app.use('/api/brief', briefRouter)

const formRouter = require('./routes/form')
app.use('/api/form', formRouter)

const formAdminRouter = require('./routes/form_admin');
app.use('/api/form-admin', formAdminRouter);

const briefAdminRouter = require('./routes/brief_admin')
app.use('/api/brief-admin', briefAdminRouter)

const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter)

const PORT = 3001
app.listen(PORT, () => console.log(`Server running on http://176.124.200.169:${PORT}`))

app.use(cors({
  origin: ['https://inoy-agency.ru', 'https://www.inoy-agency.ru'],
  methods: ['GET', 'POST']
}));

const telegramRouter = require('./routes/telegram');
app.use('/api/send-telegram', telegramRouter);

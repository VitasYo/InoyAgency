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

const PORT = 3002
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

const telegramRouter = require('./routes/telegram');
app.use('/api/send-telegram', telegramRouter);

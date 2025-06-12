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
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

// Добавьте в server.js временный код:
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('YOUR_TOKEN', {polling: true});

bot.on('message', (msg) => {
  console.log('Chat ID:', msg.chat.id);
  bot.sendMessage(msg.chat.id, `Этот чат будет получать уведомления. Chat ID: ${msg.chat.id}`);
});
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


// Добавьте в начало server.js
const axios = require('axios');
const TELEGRAM_TOKEN = 'ВАШ_ТОКЕН_БОТА';
const TELEGRAM_CHAT_ID = 'ВАШ_CHAT_ID';

// Функция для отправки уведомления
async function sendTelegramNotification(message) {
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });
  } catch (error) {
    console.error('Ошибка отправки Telegram уведомления:', error.message);
  }
}
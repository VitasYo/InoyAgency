require('dotenv').config();
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const axios = require('axios');

const dbPath = path.resolve(__dirname, '../db/database.sqlite');
const db = new sqlite3.Database(dbPath);

// Создаём таблицу
db.run(`CREATE TABLE IF NOT EXISTS brief_answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  answers TEXT,
  estimated_price INTEGER,
  user_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);

const questions = [
  { title: 'Что нужно в первую очередь?' },
  { title: 'Какие задачи хотите решить?' },
  { title: 'У вас уже есть:' },
  { title: 'Сколько площадок вести?' },
  { title: 'Планируется реклама?' },
  { title: 'Когда нужно запуститься?' },
  { title: 'Ориентир бюджета:' }
];

router.post('/', async (req, res) => {
  const { answers, estimated_price, user_id } = req.body;
  
  try {
    // Сохраняем в базу данных
    await new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO brief_answers (answers, estimated_price, user_id) VALUES (?, ?, ?)`,
        [JSON.stringify(answers), estimated_price, user_id],
        function(err) {
          if (err) return reject(err);
          resolve(this.lastID);
        }
      );
    });

    // Формируем сообщение для Telegram
    const telegramMessage = `
📊 <b>Новый заполненный бриф!</b>
━━━━━━━━━━━━━━
💰 <b>Оценочная стоимость:</b> ${estimated_price} руб./мес.
🆔 <b>User ID:</b> ${user_id || 'не указан'}
━━━━━━━━━━━━━━
<b>Ответы:</b>
${answers.map((answer, i) => `▫️ <b>${questions[i].title}</b>: ${answer}`).join('\n')}
    `;

    // Отправляем уведомление в Telegram
    await axios.post('http://ssh root@176.124.200.169
ssh: connect to host 176.124.200.169 port 22: Connection timed out:3001/api/send-telegram', {
      message: telegramMessage
    });

    res.json({ status: 'success' });
  } catch (error) {
    console.error('Ошибка при обработке брифа:', error);
    res.status(500).json({ 
      status: 'error',
      message: error.message 
    });
  }
});

module.exports = router;
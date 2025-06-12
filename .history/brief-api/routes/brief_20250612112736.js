const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const path = require('path')

// Подключаем базу данных
const dbPath = path.resolve(__dirname, '../db/database.sqlite')
const db = new sqlite3.Database(dbPath)

// Создаём таблицу при первом запуске
db.run(`CREATE TABLE IF NOT EXISTS brief_answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  answers TEXT,
  estimated_price INTEGER,
  user_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`)

router.post('/', (req, res) => {
  const { answers, estimated_price, user_id } = req.body;
  const sql = `INSERT INTO brief_answers (answers, estimated_price, user_id) VALUES (?, ?, ?)`;
  
  db.run(sql, [JSON.stringify(answers), estimated_price, user_id], function (err) {
    if (err) return res.status(500).json({ status: 'error', message: err.message });
    
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
    
    // Отправляем уведомление
    sendTelegramNotification(telegramMessage);
    
    res.json({ status: 'success', id: this.lastID });
  });
});

// Добавьте этот массив вопросов в начале файла
const questions = [
  { title: 'Что нужно в первую очередь?' },
  { title: 'Какие задачи хотите решить?' },
  { title: 'У вас уже есть:' },
  { title: 'Сколько площадок вести?' },
  { title: 'Планируется реклама?' },
  { title: 'Когда нужно запуститься?' },
  { title: 'Ориентир бюджета:' }
];

module.exports = router

const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.resolve(__dirname, '../db/database.sqlite')
const db = new sqlite3.Database(dbPath)

// ✅ Добавляем колонку, если не существует (временно, можно убрать после первого запуска)
db.run(`ALTER TABLE feedback_forms ADD COLUMN user_id TEXT`, (err) => {
  if (err && !err.message.includes('duplicate column name')) {
    console.error('Ошибка при добавлении user_id:', err.message)
  }
})

db.run(`CREATE TABLE IF NOT EXISTS feedback_forms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  phone TEXT,
  area TEXT,
  status TEXT DEFAULT 'new',
  user_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`)

router.post('/', (req, res) => {
  const { name, email, phone, area, user_id } = req.body
  const sql = `INSERT INTO feedback_forms (name, email, phone, area, status, user_id) VALUES (?, ?, ?, ?, ?, ?)`
  db.run(sql, [name, email, phone, area, 'new', user_id], function (err) {
    if (err) {
      console.error('Ошибка записи формы:', err.message)
      return res.status(500).json({ status: 'error', message: err.message })
    }
    res.json({ status: 'success', id: this.lastID })
  })
})

module.exports = router

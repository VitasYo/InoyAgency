const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/database.sqlite')

// создать таблицу (один раз при запуске)
db.run(`CREATE TABLE IF NOT EXISTS brief_answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  answers TEXT,
  estimated_price INTEGER,
  user_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`)

router.post('/', (req, res) => {
  const { answers, estimated_price, user_id } = req.body
  const sql = `INSERT INTO brief_answers (answers, estimated_price, user_id) VALUES (?, ?, ?)`
  db.run(sql, [JSON.stringify(answers), estimated_price, user_id], function (err) {
    if (err) return res.status(500).json({ status: 'error', message: err.message })
    res.json({ status: 'success', id: this.lastID })
  })
})

module.exports = router

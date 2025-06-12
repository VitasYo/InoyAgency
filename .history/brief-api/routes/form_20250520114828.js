const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.resolve(__dirname, '../db/database.sqlite')
const db = new sqlite3.Database(dbPath)

db.run(`CREATE TABLE IF NOT EXISTS feedback_forms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  phone TEXT,
  area TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`)

router.post('/', (req, res) => {
  const { name, email, phone, area } = req.body
  const sql = `INSERT INTO feedback_forms (name, email, phone, area, status) VALUES (?, ?, ?, ?)`
  db.run(sql, [name, email, phone, area], function (err) {
    if (err) return res.status(500).json({ status: 'error', message: err.message })
    res.json({ status: 'success', id: this.lastID })
  })
})

module.exports = router

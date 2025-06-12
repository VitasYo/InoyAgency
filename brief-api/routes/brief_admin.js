const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.resolve(__dirname, '../db/database.sqlite')
const db = new sqlite3.Database(dbPath)

router.get('/', (req, res) => {
  db.all('SELECT * FROM brief_answers ORDER BY created_at DESC', (err, rows) => {
    if (err) {
      console.error('Ошибка при получении brief_answers:', err.message)
      return res.status(500).json({ status: 'error', message: err.message })
    }
    res.json({ status: 'success', data: rows })
  })
})

module.exports = router

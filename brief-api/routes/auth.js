const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/database.sqlite')

// Регистрация
router.post('/register', (req, res) => {
  const { username, password } = req.body

  db.run('INSERT INTO admins (username, password) VALUES (?, ?)', [username, password], function (err) {
    if (err) return res.status(500).json({ status: 'error', message: err.message })
    res.json({ status: 'success' })
  })
})

// Вход
router.post('/login', (req, res) => {
  const { username, password } = req.body

  db.get('SELECT * FROM admins WHERE username = ?', [username], (err, row) => {
    if (err || !row) return res.status(401).json({ status: 'error', message: 'Пользователь не найден' })

    if (password !== row.password) {
      return res.status(401).json({ status: 'error', message: 'Неверный пароль' })
    }

    res.json({ status: 'success', token: 'secure-admin-token' })
  })
})

module.exports = router

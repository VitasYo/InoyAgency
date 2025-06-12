const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/database.sqlite')

// Регистрация (один раз)
router.post('/register', async (req, res) => {
  const { username, password } = req.body
  const hash = await bcrypt.hash(password, 10)

  db.run('INSERT INTO admins (username, password_hash) VALUES (?, ?)', [username, hash], function (err) {
    if (err) return res.status(500).json({ status: 'error', message: err.message })
    res.json({ status: 'success' })
  })
})

// Вход
router.post('/login', (req, res) => {
  const { username, password } = req.body

  db.get('SELECT * FROM admins WHERE username = ?', [username], async (err, row) => {
    if (err || !row) return res.status(401).json({ status: 'error', message: 'Пользователь не найден' })

    const match = await bcrypt.compare(password, row.password_hash)
    if (!match) return res.status(401).json({ status: 'error', message: 'Неверный пароль' })

    // Простой токен, без JWT
    res.json({ status: 'success', token: 'secure-admin-token' })
  })
})

module.exports = router

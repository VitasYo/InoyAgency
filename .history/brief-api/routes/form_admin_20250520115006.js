const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../db/database.sqlite');
const db = new sqlite3.Database(dbPath);

// Получить все заявки
router.get('/', (req, res) => {
  db.all('SELECT * FROM feedback_forms ORDER BY created_at DESC', (err, rows) => {
    if (err) return res.status(500).json({ status: 'error', message: err.message });
    res.json({ status: 'success', data: rows });
  });
});

// Обновить статус
router.put('/:id', (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  db.run('UPDATE feedback_forms SET status = ? WHERE id = ?', [status, id], function (err) {
    if (err) return res.status(500).json({ status: 'error', message: err.message });
    res.json({ status: 'success' });
  });
});

// Удалить заявку
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM feedback_forms WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ status: 'error', message: err.message });
    res.json({ status: 'success' });
  });
});

module.exports = router;

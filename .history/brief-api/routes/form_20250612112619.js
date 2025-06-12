router.post('/', (req, res) => {
  const { name, email, phone, area, user_id } = req.body;
  const sql = `INSERT INTO feedback_forms (name, email, phone, area, status, user_id) VALUES (?, ?, ?, ?, ?, ?)`;
  
  db.run(sql, [name, email, phone, area, 'new', user_id], function (err) {
    if (err) {
      console.error('Ошибка записи формы:', err.message);
      return res.status(500).json({ status: 'error', message: err.message });
    }
    
    // Формируем сообщение для Telegram
    const telegramMessage = `
📢 <b>Новая заявка с сайта!</b>
━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${name}
📧 <b>Email:</b> ${email || 'не указан'}
📞 <b>Телефон:</b> ${phone}
💬 <b>Сообщение:</b> ${area || 'не указано'}
━━━━━━━━━━━━━━
🆔 <b>User ID:</b> ${user_id || 'не указан'}
    `;
    
    // Отправляем уведомление
    sendTelegramNotification(telegramMessage);
    
    res.json({ status: 'success', id: this.lastID });
  });
});
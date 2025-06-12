const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });

    res.json({ status: 'success' });
  } catch (error) {
    console.error('Telegram send error:', error.message);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.warn('Telegram credentials not set!');
      return res.status(400).json({ status: 'error', message: 'Telegram not configured' });
    }

    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });

    res.json({ status: 'success' });
  } catch (error) {
    console.error('Telegram error:', error.response?.data || error.message);
    res.status(500).json({ 
      status: 'error',
      message: error.response?.data?.description || error.message
    });
  }
});

console.log('Пытаюсь отправить в Telegram:', {
  token: process.env.TELEGRAM_BOT_TOKEN ? 'есть' : 'нет',
  chatId: process.env.TELEGRAM_CHAT_ID ? 'есть' : 'нет',
  message: message.substring(0, 50) + '...'
});

module.exports = router;
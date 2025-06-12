const express = require('express');
const router = express.Router();  // Добавьте эту строку
const axios = require('axios');

router.post('/', async (req, res) => {
  console.log('Получен запрос на отправку в Telegram:', req.body);
  
  try {
    const { message } = req.body;
    
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      const errorMsg = 'Telegram credentials not configured!';
      console.error(errorMsg);
      return res.status(400).json({ status: 'error', message: errorMsg });
    }

    console.log('Пытаюсь отправить через Telegram API...');
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      },
      {
        timeout: 5000 // 5 секунд таймаут
      }
    );

    console.log('Telegram API ответ:', response.data);
    res.json({ status: 'success' });
  } catch (error) {
    const errorDetails = {
      message: error.message,
      response: error.response?.data,
      config: {
        url: error.config?.url,
        data: error.config?.data
      }
    };
    console.error('Ошибка Telegram API:', errorDetails);
    res.status(500).json({ 
      status: 'error',
      details: errorDetails
    });
  }
});

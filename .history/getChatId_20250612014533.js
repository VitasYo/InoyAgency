const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_BOT_TOKEN'; // Замените на реальный токен

// Создаем бота в polling-режиме
const bot = new TelegramBot(token, { polling: true });

// Обработчик входящих сообщений
bot.on('message', (msg) => {
  console.log('Ваш chat_id:', msg.chat.id);
  console.log('Отправьте это значение в config.js');
  
  // Останавливаем бота после получения chat_id
  bot.stopPolling();
});

console.log('Напишите любое сообщение вашему боту в Telegram...');
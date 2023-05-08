// Require the node-telegram-bot-api package
const TelegramBot = require('node-telegram-bot-api');

// Create a new bot object with your bot token
const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });

// Handle callback queries


// Send a message with buttons
bot.sendMessage(chatId, 'Press a button:', {
    reply_markup: {
        inline_keyboard: [
            
        ],
    },
});

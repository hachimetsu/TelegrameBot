module.exports = {
    name: 'button2',
    async execute(bot, chatId) {
        const message = `<b>Order History:</b>\n\n` +
            `<u>Order #001:</u>\n` +
            `Item 1: $10\n` +
            `Item 2: $20\n` +
            `Total: $30\n\n` +
            `<u>Order #002:</u>\n` +
            `Item 1: $15\n` +
            `Item 2: $25\n` +
            `Item 3: $35\n` +
            `Total: $75\n`;

        bot.sendMessage(chatId, message, {
            parse_mode: 'HTML'
        });
    }
}
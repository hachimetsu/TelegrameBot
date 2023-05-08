module.exports = {
    name: 'button4',
    async execute(bot, chatId) {
        const message = `<b>Contect Us</b>\n\n` +
            `Ph No : <u>1234567890</u>\n` +
            `Email : <u>dummy@gmail.com</u>\n`;
        bot.sendMessage(chatId, message, {
            parse_mode: 'HTML'
        });
    }
}
module.exports = {
    name: "cancel",
    async execute(bot, chatId) {
        bot.sendMessage(chatId, 'Enter index of item : ');
        bot.flag = 1;
    }
}
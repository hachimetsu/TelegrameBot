const { Event } = global.CustomGlobalBotExports;
// --------------------------------------------------
module.exports = {
    name: Event.InteractionCreate,
    async execute(bot, query) {
        console.log('Callback query received:', query.data);
        bot.sendMessage(query.message.chat.id, `You pressed the ${query.data} button!`);
        // Notify the user that the action has been completed
        bot.answerCallbackQuery(query.id);

    }
}

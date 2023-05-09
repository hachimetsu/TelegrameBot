const fs = require("fs");
const path = require("path");
const Button = new Map();
const item = { messageId: null , name: null, weight : null }
const interactionReplyPath = path.join(__dirname, "interactionReply");
fs.readdirSync(interactionReplyPath)
    .forEach((file) => {
        const btn = require(path.join(interactionReplyPath, file))
        Button.set(btn.name, btn);
    })
const { Event } = global.CustomGlobalBotExports;
// --------------------------------------------------
module.exports = {
    name: Event.InteractionCreate,
    async execute(bot, query) {
        const buttonData = query.data;
        const chatId = query.message.chat.id;
        const btn = Button.get(buttonData);
        if (btn) { btn.execute(bot, chatId) }
        else if (buttonData.startsWith('Item')) {
            item.name = buttonData.slice(5);
            await Button.get("Quantity").execute(bot, chatId, item);
        } else if(buttonData.startsWith("weight")){
            item.weight = buttonData.slice(7);
            bot.deleteMessage(chatId, item.messageId); // Delete the weight selection message
            if (item.name && item.weight) bot.db.order.push([item.name, item.weight]);
            bot.answerCallbackQuery(query.id, { text: `Selected weight: ${item.weight}` });
            return bot.answerCallbackQuery(query.id);
        } else if (buttonData === 'fast'){
            bot.sendMessage(chatId, 'dilevery in 6 to 12 with extra pay');
        } else if (buttonData === 'normal'){
            bot.sendMessage(chatId, 'dilevery in 24 to 48 with less pay');
        } else { bot.sendMessage(chatId, `Error occured in backend !`); }
        // Notify the user that the action has been completed
        bot.answerCallbackQuery(query.id);
    }
}

const { execute } = require("./Button1");
const item = {};
module.exports = {
    name: "cancel",
    async execute(bot, chatId, item) {
        const sent = await bot.sendMessage(chatId, `set weight : ${item.name}`, {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '0.5 KG', callback_data: 'weight 0.5' },
                        { text: '1.0 KG', callback_data: 'weight 1.0' },
                        { text: '1.5 KG', callback_data: 'weight 1.5' },
                        { text: '2.0 KG', callback_data: 'weight 2.0' },
                        { text: '2.5 KG', callback_data: 'weight 2.5' },
                    ],
                ],
            },
        });

        item.messageId = sent.message_id
        console.log("Q", item)
    }
}
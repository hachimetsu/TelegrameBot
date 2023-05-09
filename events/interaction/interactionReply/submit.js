module.exports = {
    name: 'submit',
    async execute(bot, chatId) {
        let order = "";
        bot.db.order.forEach((Item, i) => { order += `${i + 1}. ${Item[0]} : ${Item[1]} KG\n` });
        const message = `<b>Order Details</b>\n\n` + order;
        bot.sendMessage(chatId, message, {
            parse_mode: 'HTML'
        });

        bot.sendMessage(chatId, 'Choose Item', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Fast', callback_data: 'fast' },
                        { text: 'Normal', callback_data: 'normal' },
                    ]
                ],
            },
        });

    }
}
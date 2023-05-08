module.exports = {
    name: 'orderSum',
    async execute(bot, chatId) {
        let order = "";
        console.log(bot.db.order);
        bot.db.order.forEach((Item, i) => { order += `${i + 1}. ${Item[0]} : ${Item[1]} KG\n` });
        const message = `<b>Order Details</b>\n\n` + order;
        bot.sendMessage(chatId, message, {
            parse_mode: 'HTML'
        }); 

        bot.sendMessage(chatId, 'Choose Item', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Add', callback_data: 'button1' },
                    ],
                    [
                        { text: 'Cancel', callback_data: 'cancel' },
                    ]
                ],
            },
        });
        
    }
}
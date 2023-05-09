module.exports = {
    name: 'button3',
    async execute(bot, chatId) {
        let order = "";
        bot.db.order.forEach((Item, i) => { order += `${i+1}. ${Item[0]} : ${Item[1]} KG\n` });
        const message = `<b>Order Details</b>\n\n` + order;
        bot.sendMessage(chatId, message, {
            parse_mode: 'HTML'
        });
    } 
}
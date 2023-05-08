module.exports = {
    data: {
        command: '/start',
        description: 'Just a testing command to return something!',
    },
    async execute(bot, command) {
        console.log('start command is triggered!');
        bot.db.order = []
        bot.sendMessage(command.chat.id, 'Press a button:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'place order', callback_data: 'button1' }],
                    [{ text: 'history',     callback_data: 'button2' }],
                    [{ text: 'track',       callback_data: 'button3' }],
                    [{ text: 'query ?',     callback_data: 'button4' }],
                ],
            },
        });
        // const message = `<b>Order History:</b>\n\n` +
        //     `<u>Order #001:</u>\n` +
        //     `<u>Date : 01-05-2023 </u>\n` +
        //     `Item 1: $10\n` +
        //     `Item 2: $20\n` +
        //     `Total: $30\n\n` +
        //     `<u>Order #002:</u>\n` +
        //     `Item 1: $15\n` +
        //     `Item 2: $25\n` +
        //     `Item 3: $35\n` +
        //     `Total: $75\n`;

        // bot.sendMessage(command.chat.id, message, {
        //     parse_mode: 'HTML'
        // });
    }
};

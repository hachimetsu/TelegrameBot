module.exports = {
    data: {
        command: '/test',
        description: 'Just a testing command to return something!',
    },
    async execute(bot, command) {
        console.log('Test command is triggered!');
        bot.sendMessage(command.chat.id, 'Press a button:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Button 1', callback_data: 'button1' }],
                    [{ text: 'Button 2', callback_data: 'button2' }],
                ],
            },
        });
    }
};

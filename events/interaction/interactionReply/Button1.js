module.exports = {
    name: 'button1',
    async execute(bot, chatId) {
        bot.sendMessage(chatId, 'Choose Item', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Sugar', callback_data: 'Item Sugar' },
                        { text: 'Tea', callback_data: 'Item Tea' },
                    ],
                    [
                        { text: 'Wheat-Flour', callback_data: 'Item Wheat-Flour' },
                        { text: 'Rice', callback_data: 'Item Rice' },
                    ],
                    [
                        { text: 'Lentils', callback_data: 'Item Lentils' },
                        { text: 'Dry Fruits', callback_data: 'Item Dry Fruits' },
                    ],
                    [
                        { text: 'Spices', callback_data: 'Item Spices' },
                        { text: 'Cooking Oil', callback_data: 'Item Cooking Oil' },
                    ],
                    [
                        { text: 'Item1', callback_data: 'Item Item1' },
                        { text: 'Item2', callback_data: 'Item Item1' },
                    ],
                    [
                        { text: 'next', callback_data: 'orderSum' },
                    ]
                ],
            },
        });
    }
}
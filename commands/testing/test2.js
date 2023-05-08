module.exports = {
    data: {
        command: '/test2',
        description: 'Just a testing command to return something!',
    },
    async execute(bot, command) {
        console.log('Test2 command is triggered!');
    }
};

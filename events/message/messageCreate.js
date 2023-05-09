const { Event } = global.CustomGlobalBotExports;
// --------------------------------------------------
module.exports = {
    name: Event.MessageCreate,
    async execute(bot, message) {
        if (bot.flag) { 
            const i = parseInt(message.text);
            if (0 < i < bot.db.order.length) {bot.flag = 0; bot.db.order.splice(i-1, 1)}
            else bot.sendMessage(message.chat.id, 'index out of Range');
            return;
        }
        if(message.text[0] === '/') {
            // Get the command name from the message
            const command = bot.commands.get(message.text.split(' ')[0]);
            // If the command was found, execute it
            if (command) {
                command.execute(bot, message);
            }
            return;
        }
        console.colorLog({ fun:'MessageCreate' , text : " Event is trigered !"});
        console.colorLog({ text:'Received message', para: `: ${message.text}` });
        bot.sendMessage(message.chat.id, 'Hello, world!');
    }
}
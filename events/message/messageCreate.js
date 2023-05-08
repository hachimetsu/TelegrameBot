const { Event } = global.CustomGlobalBotExports;
// --------------------------------------------------
module.exports = {
    name: Event.MessageCreate,
    async execute(bot, message) {
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
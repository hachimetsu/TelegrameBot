// const fs = require("fs");
const path = require("path");

module.exports = async (bot) => {
    console.colorLog({title : "initilization ...(/)"})
    
    //setting objects keys for events
    global.CustomGlobalBotExports = {};
    
    CustomGlobalBotExports.Event = {
        MessageCreate: 'message',
        InteractionCreate : 'callback_query'
    };
    
    //setting bot ID
    bot['id'] = (await bot.getMe()).id;

}

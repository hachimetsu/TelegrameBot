const TelegramBot = require('node-telegram-bot-api');
const { TOKEN } = require('./config.json')
const { keepAlive } = require("./server.js")

console.clear();
// const fs = require("fs");
const path = require("path");
// replace YOUR_TOKEN with your bot's API token
const bot = new TelegramBot(TOKEN, { polling: true });

bot.commands = new Map();
bot.db = {};
require(path.join(__dirname, "init.js"))(bot).then( async () => { 
        require(path.join(__dirname, "handleEvents.js"))(bot);
        bot.handleEvents(); 
        await require(path.join(__dirname, "deployCommands.js"))(bot).then( () => {
                console.colorLog({ fun: 'Commands registered!' }); 
        });
        console.colorLog({ title: "Bot is Ready !" });
        console.colorLog({ imp : "Bot Status " , text : ": alive"})
        console.colorLog({ imp: "Bot ID ", text: ` : ${bot.id}` })
        console.colorLog({ imp: "Bot TOKEN ", text: ` : ${TOKEN}` })
        console.colorLog({ comt: "waiting for Event ...(/)" });
});
keepAlive();
bot.deleteWebHook();

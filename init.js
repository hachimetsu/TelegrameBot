// const fs = require("fs");
const path = require("path");
const colors = {
    "black": "\u001b[30m",
    "red": "\u001b[31m",
    "green": "\u001b[32m",
    "yellow": "\u001b[33m",
    "blue": "\u001b[34m",
    "magenta": "\u001b[35m",
    "cyan": "\u001b[36m",
    "white": "\u001b[37m",
    "reset": "\u001b[0;1m"
}
console.colorLog = ({ fun, comt, text, imp, title, para, link, border }) => {
    let txt = "";
    if (imp) txt += colors.red + imp + colors.reset;
    if (title) txt += colors.yellow + title + colors.reset;
    if (fun) txt += colors.blue + fun + colors.reset;
    if (text) txt += colors.white + text + colors.reset;
    if (para) txt += colors.black + para + colors.reset;
    if (link) txt += colors.blue + link + colors.reset;
    if (comt) txt += colors.green + comt + colors.reset;
    if (border) txt += colors.magenta + border + colors.reset;
    console.log(txt);
}
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

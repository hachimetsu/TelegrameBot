const fs = require("fs");
const path = require("path");

module.exports = async (bot) => {
    console.log("Initialising Events ...(/)");
    bot.handleEvents = async () => {
        const eventsPath = path.join(__dirname, "events");
        for (const folder of fs.readdirSync(eventsPath)) {
            const folderPath = path.join(eventsPath, folder);
            for (const file of fs.readdirSync(folderPath).filter((file) => file.endsWith(".js"))) {
                const event = require(path.join(folderPath, file));
                if (event.once) {
                    bot.once(event.name, (...args) => { event.execute(bot, ...args); console.colorLog({ comt: "waiting for Event ...(/)" }); });
                } else {
                    bot.on(event.name, (...args) => { event.execute(bot, ...args); console.colorLog({ comt: "waiting for Event ...(/)" }); });
                }
            }
        }
    };
};
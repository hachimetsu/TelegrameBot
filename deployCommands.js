const fs = require("fs");
const path = require("path");

module.exports = async (bot) => {
    console.log("setting up commands...(/)");
    const commands = [];
    const commandsPath = path.join(__dirname, 'commands');
    fs.readdirSync(commandsPath)
        .forEach((folder) => {
            const folderPath = path.join(commandsPath, folder); 
            fs.readdirSync(folderPath)
                .forEach(file => {
                    const command = require(path.join(folderPath, file))
                    bot.commands.set(command.data.command, command);
                    commands.push(command.data);
                })
            })
    // set the command using the setMyCommands method
    bot.setMyCommands(commands);
};
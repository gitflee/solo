const Discord = require('discord.js');
const config = require('./botconfig.json'); //Reads config (prefix, maybe owner in the future, etc.) from external file

const prefix = config.prefix; //Reads the prefix from botconfig.json
var Solo = new Discord.Client({
    disableEveryone: true
});
const fs = require('fs');

Solo.on("ready", async () => {
    console.log('Logged in.');
});

Solo.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let msgArray = message.content.split(' ');
    
    let cmd = msgArray[0].toLowerCase(); //CMD
    let arg = msgArray.slice(1); //All the args after the Command as an Array

    if(cmd === `${prefix}ping`)
    {
        debugLog(cmd, message.author.username);
        let ping = Math.round(Solo.ping);
        return message.channel.send(`${ping} ms`);
    }
});



function debugLog(commandName, user)
{
    console.log(`Command ${commandName} was used by ${user}`);
}

Solo.login('NDcxNDE0NjY1MzA2NzAxODQ0.XaIp3w.cIXfAjyk-WXpdift8Jpu92kYIVU');
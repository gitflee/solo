const Discord = require('discord.js');
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
    let cmd = msgArray[0]; //CMD
    let arg = msgArray.slice(1); //All the args after the Command as an Array
});

Solo.login('NDcxNDE0NjY1MzA2NzAxODQ0.XaIp3w.cIXfAjyk-WXpdift8Jpu92kYIVU');
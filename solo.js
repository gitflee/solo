const Discord = require('discord.js');
var Solo = new Discord.Client({disableEveryone: true});

Bot.on("ready", async () => {
    console.log('Logged in as ${Solo.user.tag}');
});

Solo.login('NDcxNDE0NjY1MzA2NzAxODQ0.XaIp3w.cIXfAjyk-WXpdift8Jpu92kYIVU');
const Discord = require('discord.js');
var Solo = new Discord.Client({disableEveryone: true});

Solo.on("ready", async () => {
    console.log('Logged in.');
});

Solo.on("message", async () => {
    
});

Solo.login('NDcxNDE0NjY1MzA2NzAxODQ0.XaIp3w.cIXfAjyk-WXpdift8Jpu92kYIVU');
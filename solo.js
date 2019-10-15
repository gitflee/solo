const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const Solo = new Discord.Client();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    Solo.on(eventName, event.bind(null, Solo));
  });
});

Solo.serverDB = new Enmap({
  name: 'serverDB',
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});

Solo.commands = new Enmap();

Solo.serverDB.defer.then(() => {
  console.log('ENMAP: ' + Solo.serverDB.size + ' elements loaded from Database serverDB.');
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    Solo.commands.set(commandName, props);
  });
});

readline.question('Please enter the Bot Token.\n', (token) => {
  Solo.login(token);
})
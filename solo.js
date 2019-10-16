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
    if (!file.endsWith(".js")) return; //if the file in ./commands/ doesn't end with .js: Ignore it
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    Solo.on(eventName, event.bind(null, Solo));
    /*
    WARNING: If one of the .js-Files in ./events/ is either not formatted correctly or empty, the console will
    try to tell you that "event.bind" is not a function or whatever. 
    */
  });
});

Solo.serverDB = new Enmap({
  name: 'serverDB',
  fetchAll: false, //optimisation
  autoFetch: true, //optimisation
  cloneLevel: 'deep'
});

Solo.commands = new Enmap();

Solo.serverDB.defer.then(() => {
  console.log('ENMAP: ' + Solo.serverDB.size + ' elements loaded from Database serverDB.');
});

fs.readdir("./commands/", (err, files) => { //Read Directory ./commands/
  if (err) return console.error(err); //If an error occurs: Broadcast it into the console
  files.forEach(file => { //For each file that exists
    if (!file.endsWith(".js")) return; //if the file in ./commands/ doesn't end with .js: Ignore it
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    Solo.commands.set(commandName, props);
  });
});

readline.question('Please enter the Bot Token.\n', (token) => {
  Solo.login(token);
})
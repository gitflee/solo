module.exports = (Solo, message) => {
  // Ignore all bots
  if (message.author.bot) return;
  let serverID = message.guild.id;
  let prefix = Solo.serverDB.get(String(serverID), "prefix");
  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = Solo.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(Solo, message, args);
};
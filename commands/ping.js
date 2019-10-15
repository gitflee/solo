exports.run = (Solo, message, args) => {
    const Discord = require('discord.js');
    if (Solo.ping > 999) {
        var ping = "999+"
    } else {
        var preslice = String(Solo.ping);
        var ping = preslice.slice(0, 3);
    }
    const embed = new Discord.RichEmbed()
        .setColor('#d40000')
        .setAuthor("Solo", Solo.user.avatarURL)
        .addField("Pong! ", ping + "ms.", true)
    message.channel.send(embed).catch(console.error);
}
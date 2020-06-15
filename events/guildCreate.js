module.exports = (Solo, guild) => {
    let serverID = guild.id;
    const serverInit = {
        prefix: '*',
        logchannel: undefined,
        modules: {
            moderation: true,
            security: false
        }
    }
    Solo.serverDB.set(String(serverID), serverInit);
};
const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: "",
    async execute(message, args, text, client){
        message.channel.send('Loading ping....').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            message.channel.send(`🏓pong! took: ${ping}ms`)
        })
    },
}
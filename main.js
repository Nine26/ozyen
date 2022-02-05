TOKEN = ("")//put token here
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();
client.event = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord); 
})

client.once('ready', () =>{
    client.user.setActivity({ type: "PLAYING", name: `Call of Duty: Modern Warfare` })//you can change activity here if you want
})


client.login(TOKEN);





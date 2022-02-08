const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});




module.exports = () =>{
    client.once('ready', () =>{
        client.user.setActivity({ type: "WATCHING", name: `https://github.com/Nine26/ozyen` })//you can change activity here if you want
    })
    console.log(`bot is online`)
}


const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const Parser = require('rss-parser');
const rss = new Parser();
const config = require('./config.json');
client.commands = new Discord.Collection();
client.event = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord); 
})



client.login(config.TOKEN);

//rss feed

let last_rss = ""



setInterval(function(){
    (async () => {
 
        let feed = await rss.parseURL(config.feed);
        let titles = feed.items[0].title
        if(titles !== last_rss){
            let links = feed.items[0].link
            let desc = feed.items[0].contentSnippet
            let newembed = new Discord.MessageEmbed()
                               .setColor('#91a6a6')
                               .setTitle(titles)
                               .setURL(links)
                               .setDescription(desc)
            
            client.channels.cache.get(config.channel).send(newembed)
            last_rss = titles
        }
       
      })();
  },  2000);
